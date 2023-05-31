import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// icons
import { ImLocation } from "react-icons/im"

// Custom marker icon
const CustomIcon = L.icon({
    iconUrl: ImLocation,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
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

            <button onClick={handleSwapToGMaps} className="tracking-widest bg-gradient-to-r from-[#677081] to-[#979faf] px-3 py-1 mt-5 font-semibold rounded-xl text-white">
                <ImLocation className="inline-block mr-3" />
                Open Location
            </button>
        </>
    );
};

export default Maps;
