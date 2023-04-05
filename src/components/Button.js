import React from 'react';
import '../stylesheets/Button.css';

function Butoon({ text, isclickbutton, clickdriver }){
  return (
    //ternarial operator
    <button
      className={ isclickbutton ? 'click_button' : 'restart_button' } 
      onClick={clickdriver}>
      {text}
    </button>
  );
}

export default Butoon;