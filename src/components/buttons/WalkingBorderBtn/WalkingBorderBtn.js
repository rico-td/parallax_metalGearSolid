import "./WalkingBorderBtn.Module.css";

const WalkingBorderBtn = ({ source, text }) => {
  return (
    <a href={source} target="_blank" rel="noreferrer">
      {text}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
};

export default WalkingBorderBtn;
