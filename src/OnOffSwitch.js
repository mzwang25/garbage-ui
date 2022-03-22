import React, { useState } from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import AlertMsg from './AlertMsg';

function OnOffSwitch() {
  const [ isOn, setIsOn ] = useState(false);
  const [ isOpenMsg, setIsOpenMsg] = useState(false);

  var handleClick = () => {
    setIsOn(!isOn);
    if(!isOn) {
      setIsOpenMsg(true);
    }
  }

  const handleCloseMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpenMsg(false);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <PowerSettingsNewIcon 
          color={isOn ? "secondary" : "off"}
        />
      </IconButton>
      <AlertMsg open={isOpenMsg} 
                handleClose={handleCloseMsg} 
                severity={"success"}
                msg={"Robot is turned on"}
      />
    </div>
  )
}

export default OnOffSwitch;
