import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNraGM0aWllOTBhdnQycm5nMzk3ZzFwMW0ifQ.DUTM9-gpBSGHav22OeLhQg";
export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(11);
  const [mapObject, setMap] = useState(null);

  const [globeView, setGlobeView] = useState(false);

  useEffect(() => {
    if (map.current) return; // initialize map only once
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
  }, [globeView]);

  const enableGlobeMode = () => {
    mapObject.current.remove();
    mapObject.current = new mapboxgl.Map({
      projection: "globe",
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 2,
      center: [lng, lat],
    });
    setMap(mapObject);
    debugger;
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
    debugger;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("location not supported in this browser");
    }
  }, [mapObject]);

  const getUser = () => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
    <div className="w-full flex">
      <div
        onClick={() => enableGlobeMode()}
        className="bg-black text-white cursor-pointer rounded p-2 top-0 right-0 z-40 absolute"
      >
        Globe mode
      </div>
      <div
        onClick={() => enableStreetMode()}
        className="bg-black text-white cursor-pointer rounded p-2 top-30 right-0 z-40 absolute"
      >
        Street mode
      </div>
      <div className="bg-white rounded p-2 bottom-0 right-0 z-40 absolute">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
