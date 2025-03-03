import { useCrud } from "../../hooks/useCrud";
import Post from "./Post";
import SideBar from "../../components/SideBar";
import styles from "./PostList.module.css";

function Home() {
  const { data: posts, loading, error } = useCrud("posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.Container}>
      <SideBar />
      <div className={styles.Home}>
        <div className={styles.PostList}>
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post.id} {...post} />)
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
