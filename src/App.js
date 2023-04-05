import './App.css';
import Button from './components/Button'
import Counter from './components/Counter'
import freeCodeCampLogo from './images/free_code_camp_logo.jpg'
import { useState } from 'react'; 

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const clickdriver = () => {
    setNumClicks(numClicks +1);
  }

  const rebootcounter = () => {
    setNumClicks(0);
  }

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
      <Counter
        clicksnumber = { numClicks }
      />
      <Button
        text='Click'
        isclickbutton={true}
        clickdriver={clickdriver}/>
      <Button
        text='Reboot'
        isclickbutton={false}
        clickdriver={rebootcounter}/>
      </div>
      
    </div>
  );
}

export default App;
