// Accepts props: width, height
function Camera( props ) {
  return (
    <div>
      <div 
        style={{ width: props.width, height: props.height }}
        id="camera"
      >
        Future Camera...
      </div>

    </div>
  )
}

export default Camera;
