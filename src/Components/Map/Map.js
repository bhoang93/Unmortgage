import React from "react";
import { connect } from "react-redux";

import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

const Map = ({ markers }) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDh_n3jKZIBvG0yNvlGABoz3XpxSSckOyQ" }}
        defaultCenter={{ lat: 54.3781, lng: -5 }}
        defaultZoom={6.3}
      >
        {markers.map(marker => {
          return (
            <MapMarker
              lat={marker.latitude}
              lng={marker.longitude}
              id={marker.id}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = state => ({
  markers: state.form.markers
});

export default connect(mapStateToProps)(Map);
