import "./WalkingBorderBtn.Module.css";

const WalkingBorderBtn = ({ source, text }) => {
  return (
    <div className="button-wrapper">
      <a href={source} target="_blank" rel="noreferrer">
        {text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

export default WalkingBorderBtn;
