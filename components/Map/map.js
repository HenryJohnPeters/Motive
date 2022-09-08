import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNraGM0aWllOTBhdnQycm5nMzk3ZzFwMW0ifQ.DUTM9-gpBSGHav22OeLhQg";
export const Map = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(10);
	const [mapObject, setMap] = useState(null);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		setMap(map);
	}, []);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("location not supported in this browser");
		}
	}, [mapObject]);

	const showPosition = (position) => {
		console.log(position);
		setLat(position.coords.latitude);
		setLng(position.coords.longitude);
		let coords = [lng, lat];
		if (mapObject) {
			mapObject.current.setCenter(coords);
		}
	};

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
};
