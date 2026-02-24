import React, { useRef, useEffect, useState } from 'react';

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
          setTheme(newTheme);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };
    // 리사이즈 최적화를 위한 이전 너비 저장
    let prevWidth = window.innerWidth;

    const colors = {
      light: {
        background: '#f9fafb', // gray-50
        particle: 'rgba(75, 85, 99, 0.8)', // gray-500
        line: 'rgba(156, 163, 175, 0.4)', // gray-400
        highlight: 'rgba(254, 229, 0, 1)', // Kakao Yellow (#FEE500)
      },
      dark: {
        background: '#000000', // black
        particle: 'rgba(107, 114, 128, 0.8)', // gray-500
        line: 'rgba(55, 65, 81, 0.6)', // gray-700
        highlight: 'rgba(254, 229, 0, 1)', // Kakao Yellow (#FEE500)
      }
    };
    let currentColors = colors[theme];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      isHovered: boolean = false;

      constructor(x?: number, y?: number) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 2 - 1) * 0.3;
        this.speedY = (Math.random() * 2 - 1) * 0.3;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;

        // Check distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.isHovered = distance < mouse.radius;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        if (this.isHovered) {
            ctx.fillStyle = currentColors.highlight;
        } else {
            ctx.fillStyle = currentColors.particle;
        }
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    
    const connect = () => {
        if (!ctx) return;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = 1 - distance / 120;
                    
                    // 연결된 두 입자의 중간 지점이 마우스 반경 내에 있으면 선 색상 변경
                    let isLineHovered = false;
                    const midX = (particles[a].x + particles[b].x) / 2;
                    const midY = (particles[a].y + particles[b].y) / 2;
                    const distMid = Math.sqrt(Math.pow(mouse.x - midX, 2) + Math.pow(mouse.y - midY, 2));
                    
                    if (distMid < mouse.radius) {
                        isLineHovered = true;
                    }

                    if (isLineHovered) {
                        ctx.strokeStyle = `rgba(234, 179, 8, ${opacity})`; // Yellow-500
                    } else {
                        // Default logic
                        if (theme === 'dark') {
                            ctx.strokeStyle = `rgba(55, 65, 81, ${opacity * 0.6})`;
                        } else {
                            ctx.strokeStyle = `rgba(156, 163, 175, ${opacity * 0.6})`;
                        }
                    }

                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // 모바일 터치 이벤트 핸들러 추가
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      currentColors = colors[theme];
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = currentColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles first
      particles.forEach(p => p.update());
      
      // Draw connections behind particles
      connect();

      // Draw particles on top
      particles.forEach(p => p.draw());

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      // 모바일 스크롤 시 주소창 등으로 인한 높이 변화만 있을 때는 파티클을 초기화하지 않음
      // 너비가 변경되었을 때만 완전히 재설정
      const newWidth = window.innerWidth;
      const widthChanged = Math.abs(newWidth - prevWidth) > 50; // 약간의 오차 허용

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (widthChanged || particles.length === 0) {
         prevWidth = newWidth;
         init();
      }
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

export default HeroBackground;