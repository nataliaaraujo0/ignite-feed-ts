import styles from "./avatar.module.scss";
export function Avatar({ hasBorder = true, src }) {
  return (
    <div className={styles.Avatar}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </div>
  );
}
