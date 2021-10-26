import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, mapCenter, mapZoom }) {
	return (
		<div className="map">
			<MapContainer
				center={mapCenter}
				zoom={mapZoom}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{showDataOnMap(countries, casesType)}
			</MapContainer>
		</div>
	);
}

export default Map;
