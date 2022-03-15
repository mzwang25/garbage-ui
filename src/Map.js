import React, { useState } from 'react';

// Accepts props: width, height
function Map( props ) {
  
  return (
    <div style={{ display: "inline-block", paddingTop: "50px", position: "fixed" }}>
      <h1> {props.hello} </h1>
      <iframe 
        style = {{ width: props.width, height: props.height }}
        src="https://maps.google.com/maps?q=34.0689071,-118.4451102&amp;t=&amp;z=18&amp;ie=utf8&amp;iwloc=b&amp;output=embed">
      </iframe>

    </div>
  )
}

export default Map;
