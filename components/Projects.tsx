import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';

const Projects: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
  
  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle className="mb-12">Projects</SectionTitle>
      <div className="group/list space-y-12">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;