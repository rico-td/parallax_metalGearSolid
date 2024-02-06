// ------------ CSS ---------------------------------
import "./styles/App.css";
import "./styles/media.queries.css";
import "./components/logo/Logo.Module.css";

// ------------ IMG`s ---------------------------------
import elevatorBg from "./assets/img/background.png";
import elevator from "./assets/img/elevator.png";
import character from "./assets/img/character2.png";
import rex from "./assets/img/rex.png";

// ------------ COMPONENTS ---------------------------------
import Logo from "./components/logo/Logo.js";
import Navbar from "./components/navbar/Navbar.js";
import Profile from "./components/profile/Profile.js";
import DatabaseResponse from "./utils/DatabaseResponse";
import Content from "./components/Content.js";

// import Content from "./components/layout/content";

function App() {
  return (
    <div className="app">
      <Navbar source1="/" text1={"About"} text2={"Artwork"} text3={"Contact"} />
      <div className="wrapper-parallax">
        <header>
          {/* noch anschauen: Position des Logos richtig setzen, responsive! */}
          <div className="align-container">
            <div className="wrapper-logo">
              <Logo
                className="logo"
                title="METAL GEAR"
                subtitle="SOLID"
                genre="TACTICAL ESPIONAGE ACTION"
              />
            </div>
          </div>
          <img
            className="elevator-bg"
            src={elevatorBg}
            alt="background elevator"
          />
          <img className="elevator" src={elevator} alt="elevator" />
          <img className="character" src={character} alt="solid snake" />
        </header>
        <Navbar
          text1={"Follow"}
          text2={"following"}
          text3={"posts"}
          className="navbar-social-media"
        />
        <article>
          <h3>FOXHOUND</h3>

          <Profile className="follow-Btn" />
          <img className="rex" src={rex} alt="rex" />
          {/* <Content data={DatabaseResponse} /> */}
          <Content data={DatabaseResponse} />
          {/* <p>
            In the immersive world of Metal Gear Solid 1, the threat of FOXHOUND
            looms large. Solid Snake, a legendary soldier, is called back into
            action by the enigmatic Colonel Campbell to investigate suspicious
            activities on Shadow Moses Island. As Snake delves deeper into the
            heart of the island, he uncovers a web of deceit and intrigue, with
            FOXHOUND at its center.
          </p> */}
        </article>
      </div>
    </div>
  );
}
export default App;
