import React, { Component }  from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  position: "relative",
  width: "60%",
  height: "40%",
  border:"10%",
}

var latitud = localStorage.getItem("latitude");
var longitud = localStorage.getItem("longitude");

class Mapa extends Component{
    render (){
    return (
    <div className ="mapContainer">
     <Map
          google={this.props.google}
          style={containerStyle}
          initialCenter={{
            lat: latitud,
            lng: longitud,
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
