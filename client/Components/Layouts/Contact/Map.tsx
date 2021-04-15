import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <div className="Map my-4">
      <MapContainer
        center={[14.3812, 75.1022]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "70vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[14.3812, 75.1022]}>
          <Popup>
            <h2 className="font-weight-bold">Perl Hotel</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
