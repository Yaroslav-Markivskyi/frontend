import Post from "../post";
import { PostResponse } from "../types";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";

interface PostListProps {
  posts: PostResponse[];
}

const PostList = ({ posts }: PostListProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.postList}>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <Typography variant="body1" className={classes.noPosts}>
          No posts available.
        </Typography>
      )}
    </Box>
  );
};

export default PostList;
