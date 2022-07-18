export interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}
