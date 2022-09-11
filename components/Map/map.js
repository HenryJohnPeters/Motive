import { useState, useRef, useEffect } from "react";
import { GiGlobe } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import geojson from "./fakeGeoJson";
import { HiOutlineHome } from "react-icons/hi";
import CreateEventModal from "../Modals/CreateEvent";

mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNraGM0aWllOTBhdnQycm5nMzk3ZzFwMW0ifQ.DUTM9-gpBSGHav22OeLhQg";

export const Map = (props) => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(null);
	const [lat, setLat] = useState(null);
	const [zoom, setZoom] = useState(13);
	const [currentMapType, setCurrentMapType] = useState(false);
	const [currentCoords, setCurrentCoords] = useState(null);

	const [creatingEvent, setCreatingEvent] = useState(null);

	//markers
	const [homeMarker, setHomeMarker] = useState(null);
	const [markers, setMarkers] = useState([]);

	//init
	useEffect(() => {
		initMap();
		getPosition();
		getGlobalMarkers();
		// plotMarkers(markers);
	}, []);

	//when map changes
	useEffect(() => {
		// getPosition(map);
		// plotMarkers(markers);
	}, [currentMapType]);

	const getGlobalMarkers = () => {
		fetch("/api/event/getGlobal")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMarkers(data.events);
				plotMarkers(data.events);
			});
	};

	//init map
	const initMap = async () => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
			pitch: 50,
		});
		map.current.on("style.load", () => {});
	};

	const flyTo = (coords) => {
		if (map.current) {
			debugger;

			map.current.flyTo({
				center: coords,
				essential: true, // this animation is considered essential with respect to prefers-reduced-motion
			});
		}
	};

	const switchLanguage = () => {
		//change language
		map.current.setLayoutProperty("country-label", "text-field", ["get", `name_${language}`]);
	};

	const getPosition = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("location not supported in this browser");
		}
	};

	const showPosition = (position) => {
		let coords = [position.coords.longitude, position.coords.latitude];
		new mapboxgl.Marker().setLngLat(coords).addTo(map.current);
		if (map.current) {
			map.current.setCenter(coords);
		}
		setCurrentCoords(coords);
		return position;
	};

	const createDraggableMarker = () => {
		const marker = new mapboxgl.Marker({
			draggable: true,
		})
			.setLngLat([lng, lat])
			.addTo(map.current);

		function onDragEnd() {
			const lngLat = marker.getLngLat();
			//   coordinates.style.display = "block";
			//   coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
		}
		marker.on("dragend", onDragEnd);
	};

	const plotMarkers = (markers) => {
		if (map.current) {
			for (const marker of markers) {
				console.log(marker);
				// Create a DOM element for each marker.
				const el = document.createElement("div");
				const width = 100;
				const height = 100;
				el.className = "marker";
				// el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
				el.style.width = `${10}px`;
				el.style.height = `${10}px`;
				el.style.borderRadius = "100px";
				el.style.backgroundSize = "100%";
				el.style.backgroundColor = "red";
				el.addEventListener("click", () => {
					window.alert(marker.name);
				});
				// Add markers to the map.
				new mapboxgl.Marker(el).setLngLat(marker.coords).addTo(map.current);
			}

			return;
		}
	};

	const enableGlobeMode = () => {
		map.current.remove();
		map.current = new mapboxgl.Map({
			projection: "globe",
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			zoom: 2,
			center: [lng, lat],
		});
		map.current.on("style.load", () => {
			map.current.setFog({
				color: "rgb(186, 210, 235)", // Lower atmosphere
				"high-color": "rgb(36, 92, 223)", // Upper atmosphere
				"horizon-blend": 0.02, // Atmosphere thickness (default 0.2 at low zooms)
				"space-color": "rgb(11, 11, 25)", // Background color
				"star-intensity": 1, // Background star brightness (default 0.35 at low zoooms )
			});
			plotMarkers(markers);
		});
		// setMap(mapObject);
		setCurrentMapType("Globe");
	};

	const enableStreetMode = () => {
		map.current.remove();
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		//setMap(mapObject);
		setCurrentMapType("Street");
	};

	const getUser = async () => {
		fetch("/api/user")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div className="w-full flex">
			<CreateEventModal close={() => setCreatingEvent(false)} open={creatingEvent} />
			<div className="absolute  right-0 bottom-10 z-40">
				{currentMapType != "Globe" ? (
					<div onClick={() => enableGlobeMode()} className="m-2 p-1 rounded-md text-black shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300">
						<GiGlobe size={50} />
					</div>
				) : (
					<div onClick={() => enableStreetMode()} className="m-2 p-1 rounded-md shadow-sm text-black cursor-pointer bg-gray-200 hover:bg-gray-300">
						<BsPerson size={50} />
					</div>
				)}
				<div onClick={() => flyTo(currentCoords)} className="m-2 p-1 rounded-md text-black shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300">
					<HiOutlineHome size={50} />
				</div>
			</div>
			<div className="absolute top-30 right-0 z-40">
				<div onClick={() => setCreatingEvent(true)} className=" m-2 p-1 rounded-md text-black shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300">
					Host Event
				</div>
			</div>
			<div className="bg-white rounded p-2 bottom-0 right-0 z-40 absolute">
				Longitude: {currentCoords} | Latitude: {currentCoords} | Zoom: {zoom}
			</div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
};
