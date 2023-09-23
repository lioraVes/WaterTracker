import React from 'react'
import setting_icon from '../Assets/settings_icon.svg'


export const SettingsButton = ({showForm, setShow}) => {
  const toggleForm = () =>{
    setShow(!showForm);


    if(showForm==true){
      document.getElementById("settingForm").style.display="none";
    }
    else{
      document.getElementById("settingForm").style.display="block";

    }
    // document.getElementById("your form id").style.display="none";
    // document.getElementById("your form id").style.display="block";
  }
  return (
    <button className='button' onClick={toggleForm}>
      <svg  className='svgContainer'>
        <image className='imgContainer' href={setting_icon} alt="settings" />
      </svg>
    </button>

  )
}
