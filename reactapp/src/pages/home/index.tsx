import PostList from "../../components/posts/PostList";
import LoadingError from "../../components/common/LoadingError";
import postService from "../../services/posts/postService";
import { PostResponse } from "../../components/posts/types";
import useCrud from "../../api/useCrud";

function Home() {
  const { data: posts, loading, error } = useCrud<PostResponse[]>(postService.getPosts);

  return (
    <>
      <LoadingError loading={loading} error={error} />
      <PostList posts={posts ?? []} /> 
    </>
  );
}

export default Home;

