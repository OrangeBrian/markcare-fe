import React, { Component }  from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import credentials from '../credentials/credentials';



var latitud = localStorage.getItem("latitude");
var longitud = localStorage.getItem("longitude");

class Mapa extends Component{
    render (){
    return (
    <div className ="mapContainer">
     <Map
          style={{ width: '68%', height: '50%' }}
          google={this.props.google}
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
  apiKey: (credentials.mapsKey) 
})(Mapa)
