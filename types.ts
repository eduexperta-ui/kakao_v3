import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnailImage?: string;
  detailImages?: { url: string; caption: string }[];
  details?: (string | { title: string; items: string[] })[];
  context?: string;
}

export interface Experience {
  company: string;
  link?: string;
  title: string;
  start: string;
  end: string;
  description: string | string[];
}