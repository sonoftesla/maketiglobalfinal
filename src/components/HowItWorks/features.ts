import { ClipboardList, Settings, Package, CheckCircle, TrendingUp, Banknote } from 'lucide-react';
import type { Feature } from './types';

export const features: Feature[] = [
  {
    icon: ClipboardList,
    title: 'Manage Orders',
    description: 'Start receiving orders from sellers and manage them in one centralized system.'
  },
  {
    icon: Settings,
    title: 'Automate Production',
    description: 'Create and manage Standard Operating Procedures (SOPs) to ensure efficiency.'
  },
  {
    icon: Package,
    title: 'Real-Time Inventory',
    description: 'Track materials and stay up-to-date with stock levels automatically.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Maintain product consistency with automated quality control systems.'
  },
  {
    icon: TrendingUp,
    title: 'Scale Operations',
    description: 'Expand your business with automated workflows and reliable delivery.'
  },
  {
    icon: Banknote,
    title: 'Unlock Financing',
    description: 'Easily get working capital financing, as well as other forms of financing.'
  }
];