import { AvatarProps } from "./avatar.interface";
import styles from "./avatar.module.scss";

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <div className={styles.Avatar}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...rest}
      />
    </div>
  );
}
