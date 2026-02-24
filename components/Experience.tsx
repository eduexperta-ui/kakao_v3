import React from 'react';
import { WORK_EXPERIENCE_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';
import type { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
  const isDescriptionArray = Array.isArray(experience.description);

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-xl transition motion-reduce:transition-none md:block group-hover:bg-gray-100/80 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg dark:group-hover:bg-neutral-800/50 dark:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:group-hover:drop-shadow-lg"></div>
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 sm:col-span-2">
        {experience.start} — {experience.end}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold leading-snug text-gray-900 dark:text-gray-100">
          <div className="inline-flex items-baseline font-semibold leading-tight text-gray-900 dark:text-gray-100 text-xl md:text-2xl">
            <span className="break-keep">
              {experience.title} <span className="text-brand dark:text-brand/80 mx-1">·</span> <span className="inline-block">{experience.company}</span>
            </span>
          </div>
        </h3>
        
        {isDescriptionArray ? (
          <ul className="mt-5 space-y-3">
            {(experience.description as string[]).map((item, idx) => (
              <li key={idx} className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 flex items-start">
                <span className="mt-[10px] mr-3 w-[6px] h-[6px] rounded-full bg-brand dark:bg-brand/70 flex-shrink-0"></span>
                <span className="flex-1 break-keep">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400 break-keep">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });

  return (
    <section 
      id="experience"
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle className="mb-12 md:mb-16">Work Experience</SectionTitle>
      <div className="group/list space-y-10 md:space-y-14">
        {WORK_EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;