export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

export interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: string;
}
