import React, { useState } from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';

function OnOffSwitch() {
  const [ isOn, setIsOn ] = useState(false);

  var handleClick = () => {
    setIsOn(!isOn);
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <PowerSettingsNewIcon 
          color={isOn ? "secondary" : "off"}
        />
      </IconButton>
    </div>
  )
}

export default OnOffSwitch;
