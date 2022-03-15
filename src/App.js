import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import OnOffSwitch from './OnOffSwitch';
import ManuOverride from './ManuOverride';
import OperatingStatus from './OperatingStatus';
import Stats from './Stats';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from '@material-ui/core/IconButton';

function App() {
  
  const [ isManualOverride, setIsManualOverride ] = useState(false);

  var handleOverrideClick = () => {
    setIsManualOverride(!isManualOverride);
  }

  var renderBottomOfScreen = () => {
    if(!isManualOverride)
      return (
        <div style={{ display: "inline-block", position: "fixed", right: "10vw", bottom: "10vh"}}>
          <IconButton onClick={handleOverrideClick}>
            <ControlCameraIcon 
              style={{ width:"10vw", height:"10vw" }} 
            />
          </IconButton>
        </div>
      )
    else
      return (
        <div style={{ display: "inline-block", position: "fixed", right: "10vw", bottom: "25vh"}}>
          <IconButton onClick={handleOverrideClick}>
            <UndoIcon 
              style={{ width:"10vw", height:"10vw" }} 
            />
          </IconButton>
          <ManuOverride />
        </div>
      )

  }

  return (
    <div style={{ padding: "10px", paddingLeft: "30px" }}>
      <Map width="35vw" height="55vh"/>
      <OperatingStatus />
      <Stats />
      <OnOffSwitch />
      {renderBottomOfScreen()}

    </div>
  );
}

export default App;
