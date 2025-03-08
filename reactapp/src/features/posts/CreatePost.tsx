import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/layout/sidebar";
import styles from "./CreatePost.module.css";
import postService from "./postService";
import { PostRequest } from "./types";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState<PostRequest>({
    title: "",
    description: "",
    price: "",
    quantity: "",
    images_files: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPost({ ...post, images_files: Array.from(e.target.files) });
    }
  };

  useEffect(() => {
    console.log("Selected files:", post.images_files);
  }, [post.images_files]);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log(post);
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("description", post.description);
    formData.append("price", post.price);
    formData.append("quantity", post.quantity);
    post.images_files.forEach((image) => {
      formData.append("images_files", image);
    });
  
    try {
      await postService.createPost(formData);
      navigate("/");
    } catch (err) {
      setError("Failed to create post");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className={styles.Container}>
      <SideBar />
      <div className={styles.CreatePost}>
        {error && <p className={styles.Error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.Form}>
          <label className={styles.Label}>Title:</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} className={styles.Input} required />

          <label className={styles.Label}>Description:</label>
          <textarea name="description" value={post.description} onChange={handleChange} className={styles.Textarea} required />

          <label className={styles.Label}>Price:</label>
          <input type="number" name="price" value={post.price} onChange={handleChange} className={styles.Input} required />

          <label className={styles.Label}>Quantity:</label>
          <input type="number" name="quantity" value={post.quantity} onChange={handleChange} className={styles.Input} required />

          <label className={styles.Label}>Image:</label>
          <input 
          type="file" 
          accept="image/*" 
          multiple
          name="images" 
          onChange={handleFileChange} 
          className={styles.Input} 
          />
          <button type="submit" className={styles.Button} disabled={loading}>
            {loading ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
