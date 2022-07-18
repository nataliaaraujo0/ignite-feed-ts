import styles from "./sidebar.module.scss";
import avatar from "../../assets/avatar.png";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cropw=500&w=716&q=80
        "
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/nataliaaraujo0.png" />
        <strong>Alucard</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
