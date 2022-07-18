import { AvatarProps } from "./avatar.interface";
import styles from "./avatar.module.scss";

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    <div className={styles.Avatar}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
      />
    </div>
  );
}
