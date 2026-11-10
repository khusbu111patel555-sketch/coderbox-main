import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const FlyToLocation = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) map.flyTo([position.lat, position.lng], 12, { duration: 1.2 });
  }, [position, map]);

  return null;
};

const ContactMap = ({ locations, defaultCenter, selectedLocation, onLocationSelect }) => (
  <MapContainer
    center={defaultCenter}
    zoom={4}
    scrollWheelZoom
    style={{ width: '100%', height: '100%', zIndex: 0 }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <FlyToLocation position={selectedLocation?.position} />
    {locations.map((location) => (
      <Marker
        key={location.id}
        position={[location.position.lat, location.position.lng]}
        icon={blueIcon}
        eventHandlers={{ click: () => onLocationSelect(location) }}
      >
        <Popup>
          <div className="max-w-[200px] sm:max-w-[240px] p-1">
            <h3 className="font-semibold text-sm sm:text-base text-slate-900">{location.city}</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">{location.address}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default ContactMap;