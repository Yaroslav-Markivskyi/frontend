import Post from "./Post";
import SideBar from "../../components/layout/sidebar";
import styles from "./PostList.module.css";
import useCrud from "../../api/useCrud";
import postService from "./postService";
import { PostResponse } from "./types";

function Home() {
  const { data: posts, loading, error } = useCrud<PostResponse>(postService.getPosts);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

  return (
        <div>
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post.id} post={post}  />)
          ) : (
            <p>No posts available.</p>
          )}
        </div>
  );
}

export default Home;
