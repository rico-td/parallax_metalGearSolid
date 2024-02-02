import './styles/App.css';
import Logo from "./components/logo/Logo.js"

function App() {
  return (
    <div className="app">
      <p>hallo</p>
      <div className='wrapper-logo'>
        <Logo
        title="METAL GEAR"
        subtitle="SOLID"
        genre="TACTICAL ESPIONAGE ACTION" />
      </div>
    </div>
  );
}

export default App;


