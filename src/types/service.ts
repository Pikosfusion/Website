import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceImage {
  url: string;
  link?: string;
  text?: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  features?: ServiceFeature[];
  images: ServiceImage[];
}

export interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  features?: ServiceFeature[];
}