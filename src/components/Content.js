import styles from "./Content.module.css";
import Gallery from "./gallery";

function Content({ data }) {
  return (
    <div className={styles.mainContainer}>
      <Gallery posts={data.posts} />
    </div>
  );
}

export default Content;
