import "./Gallery.module.css";

function Gallery({ posts }) {
  if (!posts)
    return <div style={{ width: 100, height: 100, backgroundColor: "blue" }} />;
  return (
    <div className="grid-container">
      {posts.map(function (post, index) {
        return (
          <img className="img" src={post.image} alt={"gallery image" + index} />
        );
      })}
    </div>
  );
}

export default Gallery;
