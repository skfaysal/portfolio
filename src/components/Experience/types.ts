export interface ExperienceCardProps {
    title: string;
    company: string;
    location: string;
    dateRange?: string;
    description: string[];
    logoUrl: string;
    websiteUrl: string;
    projects?: string[];
    first?: boolean;
    last?: boolean;
  }
  