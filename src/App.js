import './App.css';
import freeCodeCampLogo from './images/free_code_camp_logo.jpg'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp_logo_container'>
        <img
          className='freecodecomp_logo'
          src={freeCodeCampLogo}
          alt='Freecodecamp logo'
        />
      </div>
      <div className='main-container'>

      </div>
      
    </div>
  );
}

export default App;
