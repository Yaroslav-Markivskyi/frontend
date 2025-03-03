import SideBar from '../../components/SideBar';
import styles from './CreatePost.module.css';

function CreatePost() {
  return (
    <div className={styles.formContainer}>
      <SideBar />
      <h1>Create Post</h1>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input type="text" name="title" id="title" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <textarea name="description" id="description" className={styles.textarea}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price" className={styles.label}>Price</label>
          <input type="text" name="price" id="price" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="quantity" className={styles.label}>Quantity</label>
          <input type="number" name="quantity" id="quantity" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image" className={styles.label}>Image</label>
          <input type="file" name="image" id="image" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
