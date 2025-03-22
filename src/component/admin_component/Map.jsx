import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const topCountries = [
  {
    name: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    playerCount: 1200,
    activityScore: 85,
  },
  {
    name: "Russia",
    lat: 61.524,
    lng: 105.3188,
    playerCount: 1500,
    activityScore: 90,
  },
  {
    name: "Egypt",
    lat: 26.8206,
    lng: 30.8025,
    playerCount: 800,
    activityScore: 70,
  },
  {
    name: "Greenland",
    lat: 71.7069,
    lng: -42.6043,
    playerCount: 300,
    activityScore: 60,
  },
];

const Map = ({ apiKey }) => {
  const defaultProps = {
    center: { lat: 20, lng: 0 },
    zoom: 2,
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="text-gray-400 text-sm mb-2">Top Countries</div>
      <div className="h-40 sm:h-48 md:h-52 lg:h-48">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
            }}
            center={defaultProps.center}
            zoom={defaultProps.zoom}
            options={{
              styles: [{ stylers: [{ saturation: -100 }, { gamma: 0.8 }] }],
              disableDefaultUI: true,
            }}
          >
            {topCountries.map((country, index) => (
              <Marker
                key={index}
                position={{ lat: country.lat, lng: country.lng }}
                onClick={() =>
                  alert(
                    `Clicked ${country.name}\nPlayers: ${country.playerCount}\nActivity Score: ${country.activityScore}`
                  )
                }
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
