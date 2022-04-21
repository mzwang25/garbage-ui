// Accepts props: width, height
function Camera( props ) {
  return (
    <div>
      <iframe
       style={{ width: props.width, height: props.height }}
       id="feed" src="http://192.168.1.214:5000" />

    </div>
  )
}

export default Camera;
