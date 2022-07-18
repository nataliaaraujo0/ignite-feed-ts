import "../styles/global.scss";
import styles from "./app.module.scss";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nataliaaraujo0.png",
      name: "Alucard",
      role: "Front-end React Developer",
    },
    content: [
      { type: "paragraph", content: " Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "link",
        content: " 👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-07-11 23:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/DiogoJorge1401.png",
      name: "DiogoJorge",
      role: "Game Developer",
    },
    content: [
      { type: "paragraph", content: " Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "link",
        content: " 👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-07-10 23:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
