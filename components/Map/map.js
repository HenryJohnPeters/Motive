import { useState, useRef, useEffect } from "react";
import { GiGlobe } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNraGM0aWllOTBhdnQycm5nMzk3ZzFwMW0ifQ.DUTM9-gpBSGHav22OeLhQg";
export const Map = (props) => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(null);
	const [lat, setLat] = useState(null);
	const [zoom, setZoom] = useState(13);
	const [mapObject, setMap] = useState(null);

	//change language
	//   map.setLayoutProperty("country-label", "text-field", [
	//     "get",
	//     `name_${language}`,
	//   ]);

	const [currentMapType, setCurrentMapType] = useState(false);

	const geojson = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				properties: {
					message: "Foo",
					iconSize: [60, 60],
				},
				geometry: {
					type: "Point",
					coordinates: [-66.324462, -16.024695],
				},
			},
			{
				type: "Feature",
				properties: {
					message: "Bar",
					iconSize: [50, 50],
				},
				geometry: {
					type: "Point",
					coordinates: [-61.21582, -15.971891],
				},
			},
			{
				type: "Feature",
				properties: {
					message: "Baz",
					iconSize: [40, 40],
				},
				geometry: {
					type: "Point",
					coordinates: [-63.292236, -18.281518],
				},
			},
		],
	};

	useEffect(() => {
		console.log(props);
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("location not supported in this browser");
		}

		if (lat != null && lng != null) {
			const marker1 = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
		}

		if (map.current) {
			map.current.on("style.load", () => {
				for (const marker of geojson.features) {
					// Create a DOM element for each marker.
					const el = document.createElement("div");
					const width = marker.properties.iconSize[0];
					const height = marker.properties.iconSize[1];
					el.className = "marker";
					el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
					el.style.width = `${width}px`;
					el.style.height = `${height}px`;
					el.style.borderRadius = "20px";
					el.style.backgroundSize = "100%";

					el.addEventListener("click", () => {
						window.alert(marker.properties.message);
					});

					// Add markers to the map.
					new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map.current);
				}

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
			});
			return;
		} // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
			//dont nnedd
			pitch: 50,
			//bearing: 170,
		});

		getUser();
		setMap(map);
		console.log(props);
	}, [mapObject, lat, lng, currentMapType]);

	const enableGlobeMode = () => {
		mapObject.current.remove();
		mapObject.current = new mapboxgl.Map({
			projection: "globe",
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			zoom: 2,
			center: [lng, lat],
		});
		mapObject.current.on("style.load", () => {
			mapObject.current.setFog({
				color: "rgb(186, 210, 235)", // Lower atmosphere
				"high-color": "rgb(36, 92, 223)", // Upper atmosphere
				"horizon-blend": 0.02, // Atmosphere thickness (default 0.2 at low zooms)
				"space-color": "rgb(11, 11, 25)", // Background color
				"star-intensity": 1, // Background star brightness (default 0.35 at low zoooms )
			});
		});

		// // Create a default Marker, colored black, rotated 45 degrees.
		// const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
		//   .setLngLat([12.65147, 55.608166])
		//   .addTo(mapObject.current);

		setMap(mapObject);

		setCurrentMapType("Globe");
	};

	const enableStreetMode = () => {
		mapObject.current.remove();
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		setMap(mapObject);
		setCurrentMapType("Street");
	};

	const getUser = async () => {
		fetch("/api/hello")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});

		fetch("/api/user")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
		// console.log("geting user");
		// let res = await fetch("/api/user").then((x) => console.log(x));
		// let allPosts = await res.json();
		// console.log(allPosts);
	};

	const showPosition = (position) => {
		setLat(position.coords.latitude);
		setLng(position.coords.longitude);
		let coords = [lng, lat];
		if (mapObject) {
			mapObject.current.setCenter(coords);
		}
	};

	return (
		<div className="w-full flex">
			<div className="absolute top-30 right-0 z-40">
				<div onClick={() => enableGlobeMode()} className="m-2 p-1 rounded-md text-black shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300">
					<GiGlobe size={50} />
				</div>
				<div onClick={() => enableStreetMode()} className="m-2 p-1 rounded-md shadow-sm text-black cursor-pointer bg-gray-200 hover:bg-gray-300">
					<BsPerson size={50} />
				</div>
			</div>

			<div className="bg-white rounded p-2 bottom-0 right-0 z-40 absolute">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
};
