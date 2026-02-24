import React from 'react';
import type { Project, Experience, Skill } from './types';

const toBase64 = (str: string) => {
    try {
        return window.btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        return '';
    }
};

// Helper for Detail Image Placeholders (Fallback) - Text Size Increased
const getDetailImg = (text: string) => `data:image/svg+xml;base64,${toBase64(`
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#f8fafc"/>
  <rect x="20" y="20" width="760" height="410" rx="20" fill="none" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="16 16"/>
  <path d="M400 150 L400 210 M370 180 L430 180" stroke="#cbd5e1" stroke-width="8" stroke-linecap="round"/>
  <text x="400" y="280" font-family="sans-serif" font-size="48" fill="#64748b" text-anchor="middle" font-weight="bold">${text}</text>
  <text x="400" y="330" font-family="sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">Detail Image (16:9)</text>
</svg>
`)}`;

// ==========================================
// High-Quality Abstract Generative SVGs (Enhanced Visibility)
// ==========================================

// 0. (New) Silo Prevention (Collaboration, Connection)
const siloSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_silo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4c1d95;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5b21b6;stop-opacity:1" />
    </linearGradient>
    <filter id="glow_silo">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#grad_silo)"/>
  
  <!-- Central Hub -->
  <circle cx="400" cy="225" r="60" fill="none" stroke="#a78bfa" stroke-width="4" stroke-dasharray="10 5"/>
  <circle cx="400" cy="225" r="30" fill="#ddd6fe" filter="url(#glow_silo)"/>
  
  <!-- Connecting Lines -->
  <path d="M400 225 L200 120" stroke="#c4b5fd" stroke-width="4" opacity="0.6"/>
  <path d="M400 225 L600 120" stroke="#c4b5fd" stroke-width="4" opacity="0.6"/>
  <path d="M400 225 L200 330" stroke="#c4b5fd" stroke-width="4" opacity="0.6"/>
  <path d="M400 225 L600 330" stroke="#c4b5fd" stroke-width="4" opacity="0.6"/>
  
  <!-- Satellite Nodes -->
  <circle cx="200" cy="120" r="25" fill="#8b5cf6"/>
  <circle cx="600" cy="120" r="25" fill="#8b5cf6"/>
  <circle cx="200" cy="330" r="25" fill="#8b5cf6"/>
  <circle cx="600" cy="330" r="25" fill="#8b5cf6"/>
  
  <!-- Text -->
  <text x="400" y="400" font-family="sans-serif" font-size="42" fill="#ede9fe" text-anchor="middle" font-weight="bold" letter-spacing="2">COLLABORATION</text>
</svg>`;

// 1. Bootcamp (Growth, Coding, Structure) - Text & Icon Upscaled
const bootcampSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="grad_blue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#grad1)"/>
  
  <!-- Abstract Code Blocks - Made Larger -->
  <rect x="80" y="60" width="480" height="330" rx="16" fill="#1e293b" stroke="#334155" stroke-width="4"/>
  <circle cx="120" cy="100" r="10" fill="#ef4444"/>
  <circle cx="150" cy="100" r="10" fill="#f59e0b"/>
  <circle cx="180" cy="100" r="10" fill="#22c55e"/>
  
  <!-- Rising Graph Lines - Thicker -->
  <path d="M150 320 L280 240 L380 290 L600 120" fill="none" stroke="url(#grad_blue)" stroke-width="8" filter="url(#glow)"/>
  <circle cx="600" cy="120" r="14" fill="#60a5fa" filter="url(#glow)"/>
  
  <!-- Floating Elements - Larger Text -->
  <rect x="480" y="240" width="240" height="140" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="3" opacity="0.9"/>
  <text x="600" y="325" font-family="monospace" font-size="42" fill="#34d399" text-anchor="middle" font-weight="bold" filter="url(#glow)">&lt;Growth/&gt;</text>
  
  <!-- Grid -->
  <path d="M80 160 H600 M80 260 H600" stroke="#334155" stroke-width="2" stroke-dasharray="8 8"/>
</svg>`;

// 2. SOP (Structure, Workflow) - Text & Nodes Upscaled
const sopSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_sop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad_sop)"/>
  
  <!-- Workflow Nodes - Larger -->
  <rect x="100" y="180" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="4"/>
  <rect x="320" y="180" width="160" height="90" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="4"/>
  <rect x="540" y="180" width="160" height="90" rx="8" fill="#1e293b" stroke="#a5b4fc" stroke-width="4"/>
  
  <!-- Connecting Arrows - Thicker -->
  <path d="M260 225 H320" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="8 4"/>
  <path d="M480 225 H540" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="8 4"/>
  
  <!-- Checklist Icon - Larger -->
  <rect x="350" y="50" width="100" height="120" fill="#f8fafc" opacity="0.1"/>
  <rect x="365" y="70" width="70" height="8" rx="4" fill="#6366f1"/>
  <rect x="365" y="95" width="50" height="8" rx="4" fill="#cbd5e1"/>
  <rect x="365" y="120" width="60" height="8" rx="4" fill="#cbd5e1"/>
  
  <!-- Gear Icon - Larger -->
  <circle cx="700" cy="80" r="40" stroke="#6366f1" stroke-width="6" fill="none" stroke-dasharray="12 8" opacity="0.6"/>
  <circle cx="700" cy="80" r="14" fill="#818cf8"/>

  <!-- Text - Much Larger -->
  <text x="400" y="380" font-family="monospace" font-size="52" fill="#a5b4fc" text-anchor="middle" font-weight="bold" letter-spacing="2">SYSTEM &amp; PROCESS</text>
</svg>`;

// 3. Proposal (Document) - Icons Upscaled
const proposalSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_prop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#172554;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fbbf24;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg_prop)"/>
  
  <!-- Document - Larger -->
  <path d="M220 80 L580 80 L580 370 L220 370 Z" fill="#1e40af" opacity="0.5" transform="translate(25, 25)"/>
  <path d="M220 80 L580 80 L580 370 L220 370 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
  
  <!-- Text Lines - Thicker & Larger -->
  <rect x="280" y="150" width="240" height="20" rx="4" fill="#94a3b8"/>
  <rect x="280" y="200" width="260" height="12" rx="4" fill="#e2e8f0"/>
  <rect x="280" y="230" width="240" height="12" rx="4" fill="#e2e8f0"/>
  <rect x="280" y="260" width="250" height="12" rx="4" fill="#e2e8f0"/>
  
  <!-- Success Icon - Much Larger -->
  <circle cx="620" cy="320" r="80" fill="url(#gold_grad)" opacity="0.9" stroke="#fff" stroke-width="4"/>
  <path d="M585 320 L615 350 L655 290" fill="none" stroke="#1e3a8a" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Decorative Elements -->
  <circle cx="100" cy="50" r="150" fill="url(#gold_grad)" opacity="0.05"/>
</svg>`;

// 4. Hackathon - Text Upscaled
const hackathonSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad_hack" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </radialGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad_hack)"/>
  
  <!-- Circuit Lines -->
  <path d="M0 225 H100 L150 150 H300 L350 225 H800" fill="none" stroke="#06b6d4" stroke-width="4" opacity="0.4"/>
  <path d="M0 250 H120 L170 300 H400 L450 250 H800" fill="none" stroke="#0891b2" stroke-width="4" opacity="0.4"/>
  
  <!-- Central Chip - Larger -->
  <rect x="200" y="100" width="400" height="250" rx="20" fill="#1f2937" stroke="#06b6d4" stroke-width="4"/>
  <rect x="250" y="160" width="300" height="130" fill="#111827"/>
  
  <!-- Glowing Text - Much Larger -->
  <text x="400" y="240" font-family="sans-serif" font-weight="bold" font-size="56" fill="#22d3ee" text-anchor="middle" letter-spacing="6">HACKATHON</text>
  
  <!-- Nodes -->
  <circle cx="150" cy="150" r="6" fill="#06b6d4"/>
  <circle cx="350" cy="225" r="6" fill="#06b6d4"/>
</svg>`;

// 5. Premium Edu - Text Upscaled
const premiumEduSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_luxury" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1c1917;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="grad_gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a16207;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fcd34d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a16207;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad_luxury)"/>
  
  <!-- Abstract Podium - Larger -->
  <path d="M150 350 L650 350 L600 220 L200 220 Z" fill="#292524" stroke="#44403c" stroke-width="2"/>
  <path d="M200 220 L600 220 L550 120 L250 120 Z" fill="#44403c" stroke="#57534e" stroke-width="2"/>
  
  <!-- Crown - Larger -->
  <path d="M320 160 L320 60 L400 110 L480 60 L480 160 Z" fill="none" stroke="url(#grad_gold)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="320" cy="50" r="10" fill="#fcd34d"/>
  <circle cx="480" cy="50" r="10" fill="#fcd34d"/>
  <circle cx="400" cy="100" r="10" fill="#fcd34d"/>
  
  <!-- Text - Much Larger -->
  <text x="400" y="420" font-family="serif" font-size="40" fill="#d6d3d1" text-anchor="middle" letter-spacing="4" font-weight="bold">EXECUTIVE CLASS</text>
</svg>`;

// 6. Research - Text Upscaled
const researchSvg = `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_paper" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="#f1f5f9"/>
  
  <!-- Paper Sheet -->
  <rect x="150" y="40" width="500" height="370" fill="url(#grad_paper)" rx="8" shadow="0 4 6 rgba(0,0,0,0.1)"/>
  <path d="M150 40 L650 40 L650 410 L150 410 Z" fill="none" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Content Lines - Thicker -->
  <rect x="200" y="90" width="200" height="30" rx="4" fill="#334155"/>
  <rect x="200" y="140" width="400" height="12" rx="4" fill="#94a3b8"/>
  <rect x="200" y="170" width="380" height="12" rx="4" fill="#94a3b8"/>
  
  <!-- Charts - Larger -->
  <rect x="200" y="240" width="60" height="120" fill="#60a5fa" opacity="0.5"/>
  <rect x="280" y="280" width="60" height="80" fill="#60a5fa" opacity="0.7"/>
  <rect x="360" y="200" width="60" height="160" fill="#3b82f6"/>
  
  <!-- Magnifying Glass - Larger -->
  <g transform="translate(550, 280) rotate(-45)">
    <circle cx="0" cy="0" r="70" fill="#ffffff" stroke="#0f172a" stroke-width="10" opacity="0.9"/>
    <circle cx="0" cy="0" r="60" fill="#bae6fd" opacity="0.3"/>
    <rect x="-15" y="70" width="30" height="80" rx="8" fill="#0f172a"/>
  </g>
  
  <!-- Tag -->
  <rect x="620" y="380" width="160" height="50" rx="25" fill="#2563eb"/>
  <text x="700" y="415" font-family="sans-serif" font-size="24" fill="white" font-weight="bold" text-anchor="middle">RESEARCH</text>
</svg>`;


// Profile Placeholder SVG - 더 선명한 기본 이미지
const profilePlaceholderSvg = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#262626"/><circle cx="200" cy="140" r="60" fill="#404040"/><path d="M100,320 Q200,220 300,320" fill="none" stroke="#404040" stroke-width="20" stroke-linecap="round"/><text x="200" y="370" font-family="sans-serif" font-size="18" fill="#525252" text-anchor="middle">PHOTO NOT FOUND</text></svg>`;
export const profilePlaceholderImg = `data:image/svg+xml;base64,${toBase64(profilePlaceholderSvg)}`;

// SVG Icons - Changed to text-yellow-600/dark:text-yellow-400 for better visibility than brand yellow
export const Icons = {
    curriculum: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    lx_design: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    project_management: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    leadership: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    data_analysis: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    partnership: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    phone: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
};

export const SKILLS_DATA: Skill[] = [
  { 
    name: '교육과정 설계', 
    icon: Icons.curriculum,
    description: 'React, TS, Next.js / Claude, Cursor,Framer 등 최신 기술 트렌드 및 AI를 반영한 커리큘럼 고도화'
  },
  { 
    name: '학습 경험(LX) 디자인', 
    icon: Icons.lx_design,
    description: "교육생 중심의 학습경험 고도화, 동료 특강, 회고조 운영을 통한 능동적인 학습 환경 빌드"
  },
  { 
    name: '프로젝트 관리', 
    icon: Icons.project_management,
    description: '100명 규모 해커톤 및 메타버스 채용 행사, 대규모 부트캠프 100% 수료 등 대규모 프로젝트 완수'
  },
  { 
    name: '팀 리더십', 
    icon: Icons.leadership,
    description: '팀원(5인) 및 강사/멘토진 리딩, 조직 내 심리적 안정감 기반의 협업 환경 조성, 팀원 이탈률 0% 달성'
  },
  { 
    name: '데이터 분석', 
    icon: Icons.data_analysis,
    description: '학습 성취도, 설문 데이터 등 정량·정성 지표 기반의 주 단위 교육 품질 분석'
  },
  { 
    name: '파트너 매니지먼트, 커뮤니케이션', 
    icon: Icons.partnership,
    description: '교육생, 강사/멘토, 파트너사, 기관 등 이해관계자의 요구사항 유연하게 조율'
  },
];

export const WORK_EXPERIENCE_DATA: Experience[] = [
  {
    company: '멋쟁이사자처럼(에듀테크 스타트업)',
    link: '#',
    title: '파트 리드',
    start: '2021.7',
    end: '2025.9',
    description: [
      '웹 프론트엔드 및 IT 부트캠프 총괄 (프론트엔드, 백엔드, UX/UI, Android, IOS 등)',
      '3년 누적 매출 약 100억 원 달성',
      'B2G 교육 사업 4건 수주(2021, 2023, 2024)',
      '12명 규모의 교육팀 리딩, 학습 프레임워크 기반 교육운영 고도화',
      '교육 행정 SOP 구축, 사내 교육 진행',
      '2023년 사내 1호 우수사원 표창 수상'
    ]
  },
  {
    company: '산업교육연구원(C-Level 전문 교육 기업)',
    link: '#',
    title: '선임 연구원',
    start: '2017.3',
    end: '2020.10',
    description: [
      'CEO 및 고위 임원 대상 리더십 교육 프로그램 기획 및 운영',
      '신규 교육 과정 론칭을 통한 매출 4억 원 창출',
      '이메일 마케팅 자동화 프로세스 구축 (지원율 10% 상승, 운영 비용 20% 절감)',
      '회사 발전 기여 공로로 사내 공로상 수상'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  // 1순위: (신규) 팀 Silo 방지 및 협업 활성화 프로젝트
  {
      id: 9,
      title: '팀 Silo 방지 및 협업 활성화 프로젝트',
      context: '멋쟁이사자처럼',
      description: '팀간 소통 단절(Silo Effect)을 해결하고, 전사적 협업 문화를 정착시키기 위한 조직문화 개선 프로젝트입니다. 그룹 데일리 스크럼을 통해 협업문화 정착과 내부 이슈를 빠르게 전파할 수 있는 환경을 조성하였습니다.',
      tags: ['조직문화 개선', '협업 프로세스', 'Agile', '소통 활성화'],
      thumbnailImage: `data:image/svg+xml;base64,${toBase64(siloSvg)}`,
      detailImages: [
         { url: 'https://lh3.googleusercontent.com/d/1rQUtPA3k9OFhhq9bjsmQOQjNmnq5ndTR', caption: '데일리 스크럼 기대효과 발표 장표' },
         { url: 'https://lh3.googleusercontent.com/d/1SYjGNR5ccFkz356uod8Z0NZqZKcIvblj', caption: '인사이트 공유 미팅' }
      ],
      details: [
        '소개, 기간, 역할: Silo Effect 타파 및 협업 문화 조성 프로젝트 (2025.3 ~ 2025.8, 스크럼 리딩)',
        '문제 상황/해결: 조직 변경 및 신규인력 유입으로 부서 간 소통 부재 및 정보 차단. 전사 데일리 스크럼을 도입하여 정보가 실시간으로 흐를 수 있는 투명한 소통 환경 조성',
        {
          title: 'Action',
          items: [
            '데일리 스크럼 프로세스 정착: 매일 오전 오늘의 업무, 공유 사항, 이슈를 짧게 공유하는 루틴 수립',
            '의사결정 문화 개선: 보고형 회의를 지양하고, 현장에서 실무 고민을 즉시 논의하여 해결책을 찾는 방식 장려',
            '이슈 및 인사이트 공유: 성과나 문제 발생 시 각 팀의 해결 노하우를 즉각 공유하여 유사 문제 재발 방지 및 성공 사례 확산'
          ]
        }
      ]
  },
  // 2순위: IT 부트캠프 (822명 배출)
  {
    id: 1,
    title: '대규모 IT 부트캠프 시스템 빌드',
    context: '멋쟁이사자처럼',
    description: '프론트엔드, 디자인 부트캠프 누적 교육생 902명, 수료생 822명을 배출하며 누적 매출 100억 원을 달성했습니다. 학습자 중심의 교육 시스템을 구축하여 최고 수료율 100%, 만족도 4.9/5이라는 높은 성과를 달성했습니다.',
    tags: ['교육과정 설계', '매출 100억', '수료율 100%','만족도 4.9/5'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(bootcampSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/15gEzXkZnVuHx8_PHN3IX9ovaDVx9hzNB', caption: '수료식' },
        { url: 'https://lh3.googleusercontent.com/d/1www-PKnZ7Wg86gZ5gDGB-lIoNbxIds-2', caption: '오프라인 네트워킹' },
        { url: 'https://lh3.googleusercontent.com/d/1k3jilluaQq0f43Jtofc7toZBamtioRI4', caption: '교육만족도(4.9/5)' },
        { url: 'https://lh3.googleusercontent.com/d/1u-37XyEBRlW3GTbBqcH1iG5lGVbiE615', caption: '수료생 네트워킹' }
    ],
    details: [
        '소개, 기간, 역할: 국가 전략산업 IT인재 양성 B2G 부트캠프 기획 및 운영 (2021.7~2024.12, 총괄 PM)',
        '문제 상황/해결: 학습 난이도 급상승 구간 이탈률(30%) 방어 및 비전공자 자신감 제고를 위한 교육생 중심으로 학습 시스템 전면 개편',
        {
          title: 'Action',
          items: [
            'Agile Learning 프레임워크 적용: 주 단위 정량/정성 데이터 분석을 통한 교육 과정 개선',
            '백워드 설계(Backward Design) 프레임워크 적용 : 코딩 역량 향상에 집중된 커리큘럼 설계',
            '피어그룹 활동: 동료 피드백 시스템 개발 및 개인 학습 결과 리포트 제공으로 메타인지 강화',
            '학습 커뮤니티 구축: 24시간 온라인 학습 환경(Notion, Discord) 설계 및 회고/스터디/동료 특강 활성화',
            '데이터 기반의 교육생 이탈 방지 시스템 : 주 단위 진행하는 교육생 설문 분석과 실시간 모니터링을 통하여 이탈 징후를 조기에 포착하고 즉각적인 멘토링 or 상담 실행',
            '커리큘럼 고도화: 현직자 인터뷰 및 기술 트렌드 분석 기반 최신 기술 스택 도입 (React → TypeScript → Next.js), AI 툴 도입(Claude, Cursor, Framer 등) ',
            '리더십/멘토링: 교육생 리더십 강화 프로그램(월 1회) 운영, 리더 역할 가이드 및 교육생 갈등 관리 상담',
            '특강 기획: 수준별 맞춤 스프린트 특강, 현직자 하드/소프트 스킬(협업, 커뮤니케이션) 특강 운영',
            '선발 체계: 구조화된 지원서, 영상 평가, 기초 역량 측정을 도입하여 교육생 수준 상향 평준화',
            '취업 지원: 메타버스(게더타운) 활용 기업 채용연계 행사 기획 및 운영'
          ]
        }
    ]
  },
  // 3순위: 한국 엡손 기술 해커톤
  {
    id: 5,
    title: '엡손(EPSON) 기업 해커톤 운영 총괄',
    context: '멋쟁이사자처럼',
    description: '한국 엡손이 주관한 100명 규모의 온·오프라인 해커톤을 총괄했습니다. 엡손 C-Level 및 참가자의 높은 만족도로 2026년 재계약을 확보했으며, 정교한 팀 빌딩 시스템으로 개인 참가자 이탈률을 5% 미만으로 관리했습니다.',
    tags: ['교육 운영 총괄', '멘토링 시스템', '팀빌딩', '재계약 달성'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(hackathonSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1C00AhJXft8IBa7gcbpgCt_TF0fb7XLRN', caption: '해커톤 현장' },
        { url: 'https://lh3.googleusercontent.com/d/1-bCvg-Y5Vtdh1sg8Ng35LoVTs84s38sF', caption: '단체사진' },
        { url: 'https://lh3.googleusercontent.com/d/1to3kkQjFJXP0j2HkV21eQhpD87s_V4NB', caption: '해커톤 운영 노션' }
    ],
    details: [
        '소개, 기간, 역할: 한국 엡손 주관 API 활용 프로덕트 개발 해커톤 기획 및 운영 (2024.4.1 ~ 6.30, 운영 총괄)',
        '장소: 온라인 및 오프라인 (엡손 본사, 잠실 롯데타워)',
        '성과: 2026년 해커톤 재계약 수주',
        {
            title: 'Action',
            items: [
                '선발 프로세스: 프로젝트 기획서 평가 테이블 설계 및 본선 진출팀 선발 체계 구축',
                '팀 빌딩 시스템: 개인 참가자 역량/관심사/면담 기반의 정교한 팀 매칭으로 이탈률 5% 미만 방어',
                '교육 운영 총괄: Discord/Zoom 기반 24시간 소통 커뮤니티 구축으로 VoC 감소 및 멘토링/협업 환경 조성',
                '현장 오퍼레이션: 파이널 데모데이 사용자 여정(동선, 타임라인, 이슈 대응) 설계 및 운영 총괄'
            ]
        }
    ]
  },
  // 4순위: 전사 교육 프로세스 표준화(SOP)
  {
    id: 8,
    title: '사내 업무 표준화(SOP) 및 온보딩 가이드',
    context: '멋쟁이사자처럼',
    description: 'KDT(K-Digital Training) 6개 교육과정의 전체 행정 업무를 총괄하며, 복잡하고 산발적이던 교육 행정 프로세스를 체계화하고 표준화한 프로젝트입니다.',
    tags: ['프로세스 표준화', 'SOP 구축', '사내 교육', '행정 효율화'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(sopSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1E0nTEkyRrJBF8VY0AZ1kEUrd6CrFB_hc', caption: '워크플로우 시각화' },
        { url: 'https://lh3.googleusercontent.com/d/1Z-_-kSieX2MOkuH_dOYRdRDko4CM11sx', caption: '내부 교육' }
    ],
    details: [
        '소개, 기간, 역할: 교육 행정 및 운영 프로세스를 체계화하고 표준화하기 위한 내부 프로젝트 (2022.3 ~ 2022.5, SOP 구축 및 교육)',
        '문제 상황/해결: 개인의 경험에 의존하던 업무 방식으로 인해 발생한 품질 편차로 사업 확대에 따른 리스크 증가, 행정 프로세스 표준화(SOP) 및 매뉴얼화, 사내 교육 진행으로 진입장벽 낮춤',
        {
            title: 'Action (수행 내용)',
            items: [
                '프로세스 설계: 워크플로우 분석, 용어 정의, 단계별 SOP(표준 운영 절차) 시스템 구축',
                '매뉴얼 개발: 업무 노하우를 문서화하고, 신규 입사자용 온보딩 가이드 제작',
                '사내 교육: 제작된 매뉴얼을 기반으로 정기 그룹 세미나 및 프레젠테이션 진행'
            ]
        },
    ]
  },
  // 5순위: B2G 제안
  {
    id: 2,
    title: 'B2G IT 교육 사업 제안 및 수주',
    context: '멋쟁이사자처럼',
    description: '고용노동부 주관 사업에서 총 4개 과제에 모두 선정되어 100% 수주 성공률을 기록했습니다. 데이터 기반의 제안 전략으로 200억 원 이상의 기대 매출을 확보했습니다.',
    tags: ['RFP 분석', '제안서 기획', '시장 분석', '프레젠테이션'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(proposalSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1owMUvqaaO2o17PZAFi8Jbgpb_jJLezeu', caption: '2023 선정 과정' },
        { url: 'https://lh3.googleusercontent.com/d/1fO7FNrx79OqLc2Z_YkvAWpNi5JufCvBY', caption: '제안서 운영전략 파트' }
    ],
    details: [
        '소개, 기간, 역할: IT 교육사업 제안서 기획 및 작성 (2021, 2023, 2024, 부트캠프 제안서 작성/PT)',
        '문제 상황/해결: 경쟁사가 급격하게 증가하고 있는 상황에서 사업수주를 위한 전략이 필요한 상황, 기존 운영 데이터를 활용하여 차별화된 제안서 작성, 총 4건의 제안서 모두 최종 승인 획득 (수주율 100%) 및 기대 매출 200억 원 이상 달성',
        {
          title: 'Action',
          items: [
                '전략적 RFP 분석: 정책특화심사센터, 고용정보원 등 유관 기관과의 지속적 소통을 통해 RFP 핵심 요구사항 도출',
                '시장 및 정책 분석: IT 교육 트렌드, B2G 시장 규모, 경쟁사 현황 및 정부 정책 방향성 심층 분석',
                '제안 전략 수립: 교육 운영 데이터를 기반으로 한 차별화된 제안 논리 개발',
                '최종 발표: 핵심 가치 전달을 위한 경쟁 PT 기획 및 질의응답 대응'
             ]
        }
    ]
  },
  // 6순위: VIP 교육
  {
    id: 7,
    title: 'C-Level 대상 프리미엄 경영자 과정 기획/운영',
    context: '산업교육연구원',
    description: '기업 CEO 및 임원을 대상으로 한 프리미엄 교육 서비스를 기획했습니다. 베트남 비즈니스 과정 신규 런칭으로 매출 4억 원을 달성했으며, 데이터 기반의 마케팅 프로세스 개선으로 비용을 절감하고 공로상을 수상했습니다.',
    tags: ['교육 기획', 'C-Level 교육', '매출 4억 달성', '마케팅 효율화'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(premiumEduSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1fc8L9XLYZR7ZY4FiZU11s6OUyVEiJRV2', caption: '비즈니스 전략 강의' },
        { url: 'https://lh3.googleusercontent.com/d/1BY8CtN1drw8NVQMQn6mSZUmLpJdEK1iX', caption: '베트남-한국 인구학 강의' },
        { url: 'https://lh3.googleusercontent.com/d/1JlVjERINhqE9qQLAhod2fb4ZUTOWmgWO', caption: '네트워킹 데이' },
        { url: 'https://lh3.googleusercontent.com/d/1O5m9iLYa7U9Zl5U9fHSlG0cfGFibt58S', caption: '1박 2일 워크샵' }
    ],
    details: [
        '소개, 기간, 역힐: IT/4차산업, 베트남/차이나 비즈니스, 인문학 등 최고경영자 과정 기획 및 운영(2017.3 ~ 2020.10) 교육 기획/운영, 타켓 마케팅',
        {
            title: 'Action',
            items: [
                '신규 사업 기획: 베트남 비즈니스 최고경영자 과정 1기 런칭 및 운영 (매출 4억 원 달성)',
                '마케팅 최적화: 이메일 마케팅 자동화 프로세스 구축 및 사내 교육 (지원율 10% 상승, 비용 20% 절감)',
                '커리큘럼 리뉴얼: 문화예술/인문학 과정 콘텐츠 개선을 통한 교육생 만족도 10% 상승',
                '행사 운영: 국내/해외 워크숍 및 대규모 입학/수료식 행사 기획 (예산 수립, 장소 섭외, 시나리오)',
                '홍보 마케팅: 타겟 DB 최적화, 지면 신문 보도자료 작성(조선, 동아, 매일경제 등)'
            ]
        }
    ]
  },
  // 7. 학술 연구 (언급되지 않았지만 기존 데이터 유지)
  {
    id: 6,
    title: '학술 연구 및 데이터 분석',
    context: '학술 연구',
    description: '사용자 경험(UX), 마케팅, 기술 수용에 대한 깊이 있는 연구를 수행하여 한국연구재단(KRF) 등재지에 4편의 논문을 게재하며 데이터 기반의 문제 정의 및 해결 역량을 키웠습니다.',
    tags: ['데이터 분석', '유저 리서치', '통계 분석', '논문 게재'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(researchSvg)}`,
    detailImages: [
        { url: 'https://lh3.googleusercontent.com/d/1AYRWbNRR0OhjCKlbR2Z6PwrSapJA4_sX', caption: 'SNS 마케팅 연구' },
        { url: 'https://lh3.googleusercontent.com/d/1HC9Qd1RWmuEKwvk5vDb2lMXvG1ycKsr9', caption: 'App 사용성 연구' },
        { url: 'https://lh3.googleusercontent.com/d/1R9bFEcHM4ZznU9OwnY3LSeUHI-LOvIju', caption: '모바일 쇼핑 VOC 연구1' },
        { url: 'https://lh3.googleusercontent.com/d/1YYdrjo0u92UqjG6s0SbMukm6touIjqtV', caption: '모바일 쇼핑 VOC 연구2' }
    ],
    details: [
        '주요 연구: 페이스북 마케팅(소비자 분석), AR 앱 UX(소비자 분석), 모바일 디스플레이 색채 감성(고객 VOC)',
        '연구 전 과정(설문 설계, 데이터 수집, 통계 분석, 결과 도출) 주도적 수행',
        '통계 분석 도구(SPSS) 활용 및 데이터 해석 역량 보유'
    ]
  }
];

export const PERSONAL_INFO = {
    name: '김태진 입니다.',
    title_line1: '인재의 잠재력을',
    title_line2: '성장으로 이끌어내는',
    title_line3: 'Data 기반 Tech 교육 빌더',
    bio: '학습자 중심의 정교한 LX 설계와 성장 병목을 파악하는 데이터 분석역량을 기반으로 교육의 A to Z를 총괄합니다. 4개 기수 100% 수료를 직접 이끌어낸 압도적인 실무 전문성과 20개가 넘는 IT 교육사업 경험, 융합적 배경을 바탕으로 조직의 비즈니스 가치와 연결되는 테크 교육 모델을 설계하고 운영합니다.',
    email: 'eduexperta@gmail.com',
    phone: '010-4154-4898',
    // Stable Google Drive Image Link
    profileImage: 'https://lh3.googleusercontent.com/d/1Ng20CTgKO4jInaEUFAbQO6JWneC5XQx3'
};