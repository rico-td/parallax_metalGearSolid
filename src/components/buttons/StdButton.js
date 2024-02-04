import "./StdButton.Module.css";

const StdButton = ({ source, text }) => {
  return (
    <a href={source} target="_blank" rel="noreferrer">
      <button className="btn">{text}</button>
    </a>
  );
};

export default StdButton;
