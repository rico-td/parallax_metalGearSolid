import './styles/App.css';
import Logo from "./components/logo/Logo.js"

import ElevatorIMG from "./assets/img/background.png"
import CharacterIMG from "./assets/img/character2.png"

function App() {
  return (
    <div className="app">
      <div className="wrapper-parallax">
        <header>
          <div className='wrapper-logo'>
            <Logo
            title="METAL GEAR"
            subtitle="SOLID"
            genre="TACTICAL ESPIONAGE ACTION" />
          </div>
          <img className="elevator" src={ElevatorIMG} alt="elevator" />
          <img className="character" src={CharacterIMG} alt="solid snake" />
      </header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus sapiente ullam. Ab ad iste non, laborum id qui tempore cumque voluptatem! Ab dicta sequi corrupti? Iusto, dignissimos cumque? Provident!
          Sit, ea eius necessitatibus nam est impedit corrupti fugiat, vero et tempore officia reiciendis numquam? Sequi perferendis voluptas voluptatem veniam voluptatum rem odio tenetur nesciunt nulla consequatur saepe, facilis accusamus.
          Porro omnis deleniti dolor at minima dignissimos laborum excepturi itaque molestias. Harum cupiditate quam temporibus maiores earum omnis, cum, voluptatum unde suscipit perspiciatis voluptate nostrum ipsam assumenda vitae id. Voluptatibus.
          Architecto, facere. Aperiam, voluptas officiis molestiae ipsum vitae illo exercitationem eius facilis eum, quaerat assumenda. Fuga dicta deserunt aliquam totam facere repellendus ullam omnis illum vel autem, asperiores eos? Exercitationem?
          Assumenda commodi voluptatibus natus harum aperiam dolorum exercitationem at. Minus quaerat quis accusamus dolore consectetur nisi vel similique eligendi amet unde tenetur in sunt, recusandae placeat dignissimos exercitationem animi atque.</p>

     </div>
    </div>
  );
}
export default App;


