import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ReactDOMServer from 'react-dom/server';

const Map = () => {
  const CUSTOM_ICON = new L.DivIcon({
    html: ReactDOMServer.renderToString(<FaMapMarkerAlt style={{ color: 'var(--secondary-font)', fontSize: '35px' }}/>),
    className: "custom-icon",
    iconSize: [35, 35]
  });

  return (
    <MapContainer center={[51.2206093675261, 4.4592743]} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width:'60%', backgroundColor: '#f9f9f9',borderRadius: '10px'}}>
      <TileLayer
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[51.2206093675261, 4.4592743]} icon={CUSTOM_ICON}>
        <Popup>
          <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3f78275834721:0x9e464b0a101b01a4?sa=X&ved=1t:8290&ictx=111" target="_blank">Turnhoutsebaan 76B, 2100 Antwerpen</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;