import React, { useState } from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';

function OnOffSwitch() {
  const [ isOn, setIsOn ] = useState(false);

  var handleClick = () => {
    setIsOn(!isOn);
  }

  return (
    <div style={{ display: "inline-block", position: "fixed", left: "10vw", bottom: "10vh"}}>
      <IconButton onClick={handleClick}>
        <PowerSettingsNewIcon 
          style={{ width:"10vw", height:"10vw" }} 
          color={isOn ? "primary" : "info"}
        />
      </IconButton>
    </div>
  )
}

export default OnOffSwitch;
