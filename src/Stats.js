import Battery80Icon from '@material-ui/icons/Battery80';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
function Stats() {
  return (
    <div style={{ display: "inline-block", position: "fixed", top: "80px", paddingLeft:"15vw", right:"10vw" }}>
    <Card style={{ padding: "10px", paddingRight: "8vw" }}>
        <IconButton>
          <Battery80Icon style={{ width:"5vw", height:"5vw" }} />
        </IconButton>
        80%
        <br />
        <IconButton>
          <DeleteIcon style={{ width:"5vw", height:"5vw" }} />
        </IconButton>
        72%
      </Card>
    </div>

  )

}

export default Stats;
