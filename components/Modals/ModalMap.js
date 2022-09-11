import { useState, useRef, useEffect } from "react";

import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNraGM0aWllOTBhdnQycm5nMzk3ZzFwMW0ifQ.DUTM9-gpBSGHav22OeLhQg";

export const Map = (props) => {
	const mapContainer = useRef(null);
	const map = useRef(null);

	const getUser = async () => {
		fetch("/api/event/create")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	//init
	useEffect(() => {
		initMap();
	}, []);

	//init map
	const initMap = async () => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [0, 0],
			zoom: 2,
			pitch: 50,
		});
		map.current.on("style.load", () => {
			const marker = new mapboxgl.Marker({
				draggable: true,
			})
				.setLngLat([0, 0])
				.addTo(map.current);

			function onDragEnd() {
				props.setCoords(marker.getLngLat());
				console.log(marker.getLngLat());
			}
			marker.on("dragend", onDragEnd);
		});
	};

	return <div ref={mapContainer} className="map-modal" />;
};
