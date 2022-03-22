import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import IconButton from '@material-ui/core/IconButton';
function ManuOverride() {
  return (
    <>
      <div>
        <IconButton>
          <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
          <ChevronRightIcon/>
        </IconButton>
      </div>
      <div className="groupCon"> {/* div neccessary to group controls correctly */}
        <IconButton>
          <KeyboardArrowUpIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>

      </div>
    </>
  )
}

export default ManuOverride;
