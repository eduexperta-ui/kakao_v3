import React, { useState } from 'react';
import type { Project } from '../types';
import ImageModal from './ImageModal';

// Sub-component for rendering details list to cleaner code
const DetailList: React.FC<{ details: Project['details'] }> = ({ details }) => {
  if (!details || details.length === 0) return null;

  return (
    <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-gray-600 dark:text-gray-400 pl-2 leading-relaxed">
      {details.map((detail, index) => {
        if (typeof detail === 'string') {
          return <li key={index} className="pl-2">{detail}</li>;
        }
        return (
          <li key={index} className="list-none mt-6 mb-4">
            <span className="font-bold text-gray-900 dark:text-gray-100 block mb-3 text-lg md:text-xl">
              {detail.title}
            </span>
            <ul className="list-disc list-inside space-y-2 pl-4 border-l-4 border-yellow-200 dark:border-yellow-700 ml-1 text-base md:text-lg">
              {detail.items.map((subItem, subIndex) => (
                <li key={subIndex} className="pl-2">{subItem}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

// Sub-component for rendering images with hover zoom effect
const DetailGallery: React.FC<{ 
    images: Project['detailImages']; 
    title: string;
    onImageClick: (src: string) => void;
}> = ({ images, title, onImageClick }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {images.map((imgItem, index) => (
        <div key={index} className="flex flex-col space-y-3 group/image">
          <div 
            className="relative aspect-video rounded-lg border border-gray-200/10 bg-gray-800 overflow-hidden shadow-sm group-hover/image:shadow-md transition-all group/zoom cursor-zoom-in"
            onClick={(e) => {
              e.stopPropagation();
              onImageClick(imgItem.url);
            }}
          >
            <img
              src={imgItem.url}
              alt={imgItem.caption || `${title} detail image ${index + 1}`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/zoom:scale-[1.3]"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center font-medium px-1">
            {imgItem.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, thumbnailImage, details, context, detailImages } = project;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectText: description }),
      });
      const data = await res.json();
      if (data.summary) {
        setSummary(data.summary);
      } else {
        alert('요약에 실패했습니다.');
      }
    } catch (error) {
      alert('요약에 실패했습니다.');
    }
    setLoading(false);
  };

  return (
    <>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          {/* Hover Background Effect */}
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none md:block group-hover:bg-gray-100/80 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg dark:group-hover:bg-neutral-800/50 dark:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:group-hover:drop-shadow-lg"></div>
          
          {/* Thumbnail Section */}
          {thumbnailImage && (
              <div className="z-10 sm:order-1 sm:col-span-2 sm:mt-1">
              <div 
                  className="relative aspect-video w-full rounded-lg border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:mx-0 bg-gray-800 overflow-hidden shadow-sm group/thumb cursor-zoom-in"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(thumbnailImage);
                  }}
              >
                  <img 
                      src={thumbnailImage} 
                      alt={`${title} project thumbnail`} 
                      loading="lazy" 
                      decoding="async" 
                      className="absolute inset-0 w-full h-full object-cover" 
                  />
              </div>
              </div>
          )}

          {/* Content Section */}
          <div className="z-10 sm:order-2 sm:col-span-6">
              {context && (
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  {context}
              </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">{description}</p>
              
              <button 
                onClick={handleSummarize} 
                disabled={loading} 
                className="mb-5 px-4 py-2 bg-[#FEE500] hover:bg-[#FEE500]/90 text-black font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    카카오 AI가 성과 분석 중...
                  </>
                ) : '🌟 카카오 AI로 3줄 요약보기'}
              </button>

              {summary && (
                <div className="mb-5 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <strong className="block mb-2 text-gray-900 dark:text-white">💡 AI 핵심 성과 요약:</strong>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">{summary}</p>
                </div>
              )}

              {/* Tags - Font size increased to text-sm */}
              <div className="flex flex-wrap gap-2 mb-5">
              {tags.map((tag) => (
                  <span key={tag} className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 text-sm font-semibold px-3 py-1 rounded-full border border-yellow-200 dark:border-yellow-800">
                  {tag}
                  </span>
              ))}
              </div>

              {/* Expandable Details */}
              {details && details.length > 0 && (
              <div>
                  <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="inline-flex items-center space-x-2 text-base font-bold text-yellow-600 dark:text-[#FEE500] hover:underline focus:outline-none"
                  aria-expanded={isExpanded}
                  >
                  <span>{isExpanded ? '간략히 보기' : '자세히 보기'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                  >
                  <DetailList details={details} />
                  <DetailGallery 
                      images={detailImages} 
                      title={title} 
                      onImageClick={setSelectedImage}
                  />
                  </div>
              </div>
              )}
          </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          src={selectedImage} 
          alt={title} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
};

export default ProjectCard;