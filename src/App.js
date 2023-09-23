import './App.css';
import { SettingForm } from './Componenets/SettingForm.js';
import { SettingsButton } from './Componenets/SettingsButton.js';
import { Header } from './Componenets/Header.js';
import { useState } from 'react';
import { ProgressBar } from './Componenets/ProgressBar.js';
import { BeveragesContainer } from './Componenets/BeveragesContainer.js';

function App() {
  const [showSettingForm,SetShowSettingForm]=useState(true);
  const [showProgress,setShowProgress]=useState(false);
  const [waterResult,setWaterResult]=useState(0);
  const [curWaterAmount,setCurWaterAmount]=useState(0);



  return (
    <div className="App">
      <Header/> <br/>
      <div className="settingContainer">
        <div className='settingButtonContainer'>
          <SettingsButton showForm={showSettingForm} setShow={SetShowSettingForm} />
        </div>
        <div className="SettingFormComponent">
            <SettingForm showForm={showSettingForm} setShow={SetShowSettingForm} setShowProgress={setShowProgress} setWaterResult={setWaterResult}/>
          </div>
        {/* {showSettingForm && 
          <div className="SettingFormComponent">
            <SettingForm showForm={showSettingForm} setShow={SetShowSettingForm} setShowProgress={setShowProgress} setWaterResult={setWaterResult}/>
          </div>} */}
      </div>
      <br/>
      {showProgress && <div>
        <div className='ProgressBarContainer'>
        <ProgressBar totalWater={waterResult} curWater={curWaterAmount} /> 
        </div>
          <BeveragesContainer curWater={curWaterAmount} setWater={setCurWaterAmount}/>
        </div>
        }


    </div>
  );
}

export default App;
