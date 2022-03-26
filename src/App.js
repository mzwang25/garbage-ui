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
import Camera from './Camera';

function App() {
  
  const [ isManualOverride, setIsManualOverride ] = useState(false);

  var handleOverrideClick = () => {
    setIsManualOverride(!isManualOverride);
  }

  var renderBottomOfScreen = () => {
    if(!isManualOverride)
      // Renders case of non-manual override
      return (
        <>
          <IconButton onClick={handleOverrideClick}>
            <ControlCameraIcon />
          </IconButton>
        </>
      )
    else
      // Renders case of manual override
      return (
        <>
          <IconButton onClick={handleOverrideClick}>
            <UndoIcon />
          </IconButton>
          <ManuOverride />
        </>
      )
  }

  return (
    <div className="rootDiv">
      <OperatingStatus />
      <div className="infoContainer">
        <Map width="25vw" height="25vw"/>
        { isManualOverride ? <Camera width="25vw" height="25vw" /> : <></> }
        <Stats />
      </div>
      <div className="controlsContainer">
        <OnOffSwitch />
        {renderBottomOfScreen()}
      </div>
    </div>
  );
}

export default App;
