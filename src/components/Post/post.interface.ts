export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};
export type Content = {
  type: "paragraph" | "link";
  content: string;
};
export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}
