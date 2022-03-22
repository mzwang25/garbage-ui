import Battery80Icon from '@material-ui/icons/Battery80';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
function Stats() {
  return (
    <div className="statusCard">
    <Card>
        <IconButton>
          <Battery80Icon/>
        </IconButton>
        80%
        <br />
        <IconButton>
          <DeleteIcon/>
        </IconButton>
        72%
      </Card>
    </div>

  )

}

export default Stats;
