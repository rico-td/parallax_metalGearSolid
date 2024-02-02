import StdButton from "../buttons/StdButton"
import "./Navbar.Module.css"

const Navbar = ({text, source}) => {
    return (
        <div className="navbar">        
            <StdButton source="http://www.google.de" text="About"/>
            <StdButton source="http://www.google.de" text="Artwork"/>
            <StdButton source="http://www.google.de" text="Contact"/>
        </div>
      );
}
 
export default Navbar;

