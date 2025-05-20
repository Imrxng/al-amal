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
    <MapContainer center={[51.22522951193446, 4.460990960172096]} zoom={14} scrollWheelZoom={false} style={{ height: "auto", width:'60%', backgroundColor: '#f9f9f9',borderRadius: '10px'}}>
      <TileLayer
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[51.22522951193446, 4.460990960172096]} icon={CUSTOM_ICON}>
        <Popup>
          <a href="https://www.google.com/maps/place/Moskee+El+Amal+(Educatief+en+Cultureel+De+Hoop)/@51.2251875,4.4606798,18z/data=!4m14!1m7!3m6!1s0x47c3f77a07dee513:0xe9a9b00d116f3085!2sMoskee+El+Amal+(Educatief+en+Cultureel+De+Hoop)!8m2!3d51.2251724!4d4.4605779!16s%2Fg%2F11txwc6dws!3m5!1s0x47c3f77a07dee513:0xe9a9b00d116f3085!8m2!3d51.2251724!4d4.4605779!16s%2Fg%2F11txwc6dws?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank">Palinckstraat 124, 2100 Antwerpen</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;