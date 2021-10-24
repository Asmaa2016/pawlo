import { FC } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const WhereUs: FC = () => {
  const style = {
    maxWidth: "50%",
    height: "350px",
    overflowX: "hidden",
    overflowY: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const containerStyle = {
    maxWidth: "100%",
    height: "350px",
    position: "relative",
    marginBottom: "70px",
    marginTop: "70px",
  };
  return (
    <div className="w-full flex flex-col items-center  lg:px-36 px-4 py-12">
      <h1 className="text-3xl font-bold font-Poppins mb-4">What People Say</h1>
      <p className="text-base max-w-md text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et
      </p>
      <Map
        google={window.google}
        zoom={14}
        style={style}
        containerStyle={containerStyle}
      >
        <Marker />
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyBFVwdzPnMZGToCjTuvU4fGP4gdxK9378Q",
})(WhereUs);
