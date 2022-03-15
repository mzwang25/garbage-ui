import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import IconButton from '@material-ui/core/IconButton';
function ManuOverride() {
  return (
    <div style={{ display: "inline-block", position: "fixed", right: "10vw", bottom: "10vh"}}>
      <IconButton>
        <ChevronLeftIcon 
          style={{ width:"10vw", height:"10vw" }} 
        />
      </IconButton>

      <IconButton>
        <ChevronRightIcon 
          style={{ width:"10vw", height:"10vw" }} 
        />
      </IconButton>

      <IconButton>
        <KeyboardArrowUpIcon 
          style={{ width:"10vw", height:"10vw" }} 
        />
      </IconButton>

      <IconButton>
        <KeyboardArrowDownIcon
          style={{ width:"10vw", height:"10vw" }} 
        />
      </IconButton>
    </div>
  )
}

export default ManuOverride;
