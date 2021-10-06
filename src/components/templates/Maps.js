import React, { Component }  from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  position: "relative",
  width: "70%",
  height: "40%",
}

class Mapa extends Component{
    render (){
    return (
    <div className ="mapContainer">
     <Map
          google={this.props.google}
          style={containerStyle}
          initialCenter={{
            lat: -34.6197004,
            lng: -58.4993085,
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBk-g4NaQI6ajOosRD3QNzeb2X0w8YF3aI")
})(Mapa)
