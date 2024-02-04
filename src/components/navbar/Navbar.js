import WalkingBorderBtn from "../buttons/WalkingBorderBtn/WalkingBorderBtn.js";
import "./Navbar.Module.css";

const Navbar = ({ text, source }) => {
  return (
    <div className="navbar">
      <div className="button-wrapper">
        <WalkingBorderBtn source="http://www.google.de" text="About" />
      </div>
      <div className="button-wrapper">
        <WalkingBorderBtn source="http://www.google.de" text="Artwork" />
      </div>
      <div className="button-wrapper">
        <WalkingBorderBtn source="http://www.google.de" text="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
