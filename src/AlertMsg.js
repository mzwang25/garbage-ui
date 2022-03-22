/*
Code borrowed from 
https://mui.com/components/snackbars/
*/

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertMsg(props) {
	// props.open -> boolean state value (to turn msg on and off)
  // props.handleClose -> function to close message (autoclose)
	// props.msg -> message to show user
  // props.severity -> "success" | "info" | "warning" | "error"

  return (
    <>
      <Snackbar 
				open={props.open} 
				autoHideDuration={3000} 
				onClose={props.handleClose}
			>
        <Alert 
					onClose={props.handleClose}
					severity={props.severity}
					sx={{ width: '100%' }}
				>
					{props.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
