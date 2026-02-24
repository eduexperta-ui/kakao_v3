import React from 'react';
import { PERSONAL_INFO } from '../constants';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 md:pt-40">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="w-full">
          <h1 className="tracking-tighter flex flex-col items-start break-keep text-left">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 dark:text-gray-500 mb-0.5 leading-none">
              {PERSONAL_INFO.title_line1}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 dark:text-gray-400 leading-none">
              {PERSONAL_INFO.title_line2}
            </span>
            {/* 메인 타이틀 - Kakao Style Text Color */}
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mt-2 leading-snug text-yellow-500 dark:text-[#FEE500]">
                {PERSONAL_INFO.title_line3}
            </span>
            {/* 이름 섹션 - Kakao Style Text Color */}
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-1 sm:mt-2 leading-snug block text-yellow-500 dark:text-[#FEE500]">
                {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-8 sm:mt-10 break-keep text-left">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;