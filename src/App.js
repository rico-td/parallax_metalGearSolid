import "./styles/App.css";
import Logo from "./components/logo/Logo.js";

import ElevatorIMG from "./assets/img/background.png";
import CharacterIMG from "./assets/img/character2.png";
import Audio from "./assets/audio/keys-of-moon-immense.mp3";
import Navbar from "./components/navbar/Navbar.js";

function App() {
  return (
    <div className="app">
      <Navbar source="/" text={"About"} className="navbar" />
      <div className="wrapper-parallax">
        <header>
          {/* noch anschauen: Position des Logos richtig setzen, responsive! */}
          <div className="wrapper-logo">
            <Logo
              title="METAL GEAR"
              subtitle="SOLID"
              genre="TACTICAL ESPIONAGE ACTION"
            />
          </div>
          <img className="elevator" src={ElevatorIMG} alt="elevator" />
          <img className="character" src={CharacterIMG} alt="solid snake" />
        </header>
        <article>
          <h3>The Threat of FOXHOUND</h3>
          <p>
            In the immersive world of Metal Gear Solid 1, the threat of FOXHOUND
            looms large. Solid Snake, a legendary soldier, is called back into
            action by the enigmatic Colonel Campbell to investigate suspicious
            activities on Shadow Moses Island. As Snake delves deeper into the
            heart of the island, he uncovers a web of deceit and intrigue, with
            FOXHOUND at its center. The threat of a nuclear catastrophe hangs
            heavy in the air, driving Snake to confront his past and question
            his allegiances. Amidst the shadowy corridors and hidden dangers of
            Shadow Moses, Snake must navigate a treacherous landscape of
            betrayal and danger to uncover the truth and save the world from
            impending doom.
          </p>
        </article>
        <article>
          <h3>The Threat of FOXHOUND</h3>
          <p>
            In the immersive world of Metal Gear Solid 1, the threat of FOXHOUND
            looms large. Solid Snake, a legendary soldier, is called back into
            action by the enigmatic Colonel Campbell to investigate suspicious
            activities on Shadow Moses Island. As Snake delves deeper into the
            heart of the island, he uncovers a web of deceit and intrigue, with
            FOXHOUND at its center. The threat of a nuclear catastrophe hangs
            heavy in the air, driving Snake to confront his past and question
            his allegiances. Amidst the shadowy corridors and hidden dangers of
            Shadow Moses, Snake must navigate a treacherous landscape of
            betrayal and danger to uncover the truth and save the world from
            impending doom.
          </p>
        </article>
      </div>
    </div>
  );
}
export default App;
