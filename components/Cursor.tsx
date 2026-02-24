import React, { useState, useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const requestRef = useRef<number | null>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });
  
  const dotScale = useRef(1);
  const outlineScale = useRef(1);

  const isHoveringLinkRef = useRef(isHoveringLink);
  isHoveringLinkRef.current = isHoveringLink;

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const isHovering = target.closest('a') !== null || target.closest('button') !== null;
      if (isHovering !== isHoveringLinkRef.current) {
        setIsHoveringLink(isHovering);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const posSpeed = 0.4;
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * posSpeed;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * posSpeed;

      const scaleSpeed = 0.2;
      const targetDotScale = isHoveringLinkRef.current ? 3 : 1;
      const targetOutlineScale = isHoveringLinkRef.current ? 0 : 1;
      
      dotScale.current += (targetDotScale - dotScale.current) * scaleSpeed;
      outlineScale.current += (targetOutlineScale - outlineScale.current) * scaleSpeed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%) scale(${dotScale.current})`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%) scale(${outlineScale.current})`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{ left: 0, top: 0 }}
        className="fixed w-2 h-2 bg-brand rounded-full pointer-events-none z-[9999]"
      />
      <div
        ref={outlineRef}
        style={{ left: 0, top: 0 }}
        className="fixed w-6 h-6 border-2 border-brand rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};

export default Cursor;