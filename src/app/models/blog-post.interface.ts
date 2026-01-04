export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  category: 'Budgeting' | 'Investment' | 'Digital Finance';
  tags: string[];
  publishedDate: string;
  readTime: number; // in minutes
  imageUrl?: string;
  featured: boolean;
}


