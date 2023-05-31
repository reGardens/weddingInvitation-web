import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon, icon } from 'leaflet';

// icons
import { ImLocation } from 'react-icons/im'; // Replace 'FaCustomIcon' with the desired React Icons component

// Custom marker icon
const CustomIcon = new Icon({
    iconUrl: ImLocation, // Path to your custom icon image or a React Icons component
    iconSize: [32, 32], // Icon size in pixels
    iconAnchor: [16, 32], // Anchor point of the icon (relative to its top-left corner)
  });

const Maps = () => {
    const position = [-6.153453755284044, 106.7896074827283] // Latitude, Longitude

    const positionToString = position.join(",")
    const newArrayPosition = positionToString.split(",")
    const firstLatitude = newArrayPosition[0]
    const firstLongitude = newArrayPosition[1]

    // GET LOCATION FOR BUTTON 
    const handleSwapToGMaps = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                () => {
                    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${firstLatitude},${firstLongitude}`;
                    window.location.href = googleMapsUrl;
                    // console.log('cek latitude', googleMapsUrl);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    return (
        <>
            <MapContainer center={position} zoom={23} scrollWheelZoom={false} className="w-[18rem] h-[18rem] lg:w-[30rem] lg:h-[30rem] bg-red-300 overflow-hidden">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={CustomIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

            <button onClick={handleSwapToGMaps} className="tracking-widest bg-gradient-to-r from-[#677081] to-[#979faf] px-1 pr-[5.5px] py-1 mt-5 font-semibold rounded-xl text-white">
                <ImLocation className="inline-block mr-3" />
                <span className="text-sm">
                    Open Location
                </span>
            </button>
        </>
    );
};

export default Maps;
