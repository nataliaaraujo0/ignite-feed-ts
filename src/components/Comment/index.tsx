import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.scss";
import { Avatar } from "../Avatar";
import { useState } from "react";
import { CommentProps } from "./comment.interface";

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    console.log("deletar");
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/nataliaaraujo0.png"
        hasBorder={false}
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alucard</strong>
              <time title="26 de Junho de 2022" dateTime="2022-06-26 12:13:04">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
