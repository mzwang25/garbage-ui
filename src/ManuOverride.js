import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import IconButton from '@material-ui/core/IconButton';
function moveForward() {
  fetch( "http://192.168.2.2:5000/setForward" )
}

function moveBackward() {
  fetch( "http://192.168.2.2:5000/setBackward" )
}

function moveLeft() {
  fetch( "http://192.168.2.2:5000/setLeft" )
}

function moveRight() {
  fetch( "http://192.168.2.2:5000/setRight" )
}

function stop() {
  fetch( "http://192.168.2.2:5000/stop" )
}

function ManuOverride() {
  return (
    <>
      <div>
        <IconButton onMouseDown={ moveLeft } onMouseUp={ stop }>
          <ChevronLeftIcon/>
        </IconButton>
        <IconButton onMouseDown={ moveRight } onMouseUp={ stop }>
          <ChevronRightIcon/>
        </IconButton>
      </div>
      <div className="groupCon"> {/* div neccessary to group controls correctly */}
        <IconButton onMouseDown={ moveForward } onMouseUp={ stop }>
          <KeyboardArrowUpIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon onMouseDown={ moveBackward } onMouseUp={ stop } />
        </IconButton>

      </div>
    </>
  )
}

export default ManuOverride;
