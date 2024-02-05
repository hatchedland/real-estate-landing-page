import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import { Airplane, Bag, Building, Cart, City, DivideThree, HomeAlt, Metro, Train } from 'iconoir-react';

const locationsData = [
    {
        "id": 1,
        "location": "Thanisandra Metro",
        "distance": 3.5,
        "type": "Metro Station",
        "coordinates": [13.060230119228788, 77.63240562711874],
    },
    {
        "id": 2,
        "location": "Nagawara Junction",
        "distance": 3.5,
        "type": "Junction",
        "coordinates": [13.040703469332785, 77.62433989373383],
    },
    {
        "id": 3,
        "location": "Thanisandra Road",
        "distance": 3.5,
        "type": "Airport",
        "coordinates": [13.07085575271101, 77.63358226990884],
    },
    {
        "id": 4,
        "location": "Hebbal Junction",
        "distance": 7,
        "type": "Junction",
        "coordinates": [13.04343957154742, 77.58656182466511],
    },
    {
        "id": 5,
        "location": "Yeshwantpura Station",
        "distance": 14,
        "type": "Train Station",
        "coordinates": [13.025403864515086, 77.55169648745775],
    },
    {
        "id": 6,
        "location": "International Airport",
        "distance": 26,
        "type": "Airport",
        "coordinates": [13.203810640285587, 77.70631224304091],
    },
    {
        "id": 7,
        "location": "Manyata (Gate no 5)",
        "distance": 1.4,
        "type": "Business Park",
        "coordinates": [13.05899781027463, 77.62432274968639],
    },
    {
        "id": 8,
        "location": "Karle IT SEZ Park",
        "distance": 4,
        "type": "IT Park",
        "coordinates": [13.0452240323032, 77.61305317350048],
    },
    {
        "id": 9,
        "location": "Bhartiya Center(BCIT)",
        "distance": 4.5,
        "type": "Commercial Center",
        "coordinates": [13.084419436159813, 77.63993989409637],
    },
    {
        "id": 10,
        "location": "Brigade Magnum",
        "distance": 5,
        "type": "Residential Complex",
        "coordinates": [13.057950495637147, 77.59420034024053],
    },
    {
        "id": 11,
        "location": "Kirloskar Tech Park",
        "distance": 6,
        "type": "Tech Park",
        "coordinates": [13.051788322138256, 77.59535905459694],
    },
    {
        "id": 12,
        "location": "Elements Mall",
        "distance": 3,
        "type": "Shopping Mall",
        "coordinates": [13.045766330164275, 77.62679437143348],
    },
    {
        "id": 13,
        "location": "Phoneix Mall of Asia",
        "distance": 4.5,
        "type": "Shopping Mall",
        "coordinates": [13.070906310138072, 77.5913081303394],
    },
    {
        "id": 14,
        "location": "Esteem Mall",
        "distance": 5.5,
        "type": "Shopping Mall",
        "coordinates": [13.04912586999944, 77.59338494865506],
    },

];


const getLocationIcon = (type) => {
    switch (type) {
        case "Metro Station":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><Train width={30} height={30} /></div>) });
        case "Junction":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><DivideThree width={30} height={30} /></div>) });
        case "Train Station":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><Metro width={30} height={30} /></div>) });
        case "Airport":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><Airplane width={30} height={30} /></div>) });
        case "Business Park":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><Bag width={30} height={30} /></div>) });
        case "IT Park":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><City width={30} height={30} /></div>) });
        case "Commercial Center":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><Building width={30} height={30} /></div>) });
        case "Residential Complex":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><HomeAlt width={30} height={30} /></div>) });
        case "Tech Park":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><City width={30} height={30} /></div>) });
        case "Shopping Mall":
            return L.divIcon({ className: 'dummy', html: ReactDOMServer.renderToString(<div className='flex items-center justify-center text-lg bg-black text-white h-10 w-10 rounded-full border-2 p-2 border-white'><Cart width={30} height={30} /></div>) });
        default:
            return null;
    }
};

// styles for responsiveness
const mapStyles = {
    large: {
        width: "60vw",
        height: "50vh",
    },
    medium: {
        width: "60vw",
        height: "50vh",
    },
    small: {
        width: "90vw",
        height: "50vh",
    },
};


export const POIEmbed = () => {
    const position = [13.06755545439056, 77.62308523817282];
    const center = [13.063237545906489, 77.62068734151353];


    const groupedMarkers = locationsData.reduce((groups, location) => {
        const icon = getLocationIcon(location.type);
        const marker = (
            <Marker
                key={location.id}
                position={location.coordinates}
                icon={icon}
            >
                <Popup>
                    <div className="text-xl font-bold mb-2">{location.location}</div>
                    <div className="flex flex-col">
                        <span className="text-black w-fit px-4 py-1 bg-gray-200 text-sm rounded-full">{location.type}</span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                        <span className="text-black">Distance:</span>
                        <span className="text-black text-lg font-bold opacity-75">{location.distance} Km</span>
                    </div>
                </Popup>
            </Marker>
        );

        if (!groups[location.type]) {
            groups[location.type] = [];
        }
        groups[location.type].push(marker);

        return groups;
    }, {});

    return (
        <MapContainer style={{ width: "90vw", height: "70vh", zIndex: 1 }} center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} zIndexOffset={1000}>
                <Popup>
                   <div className='text-xl font-bold'>SNN Felicity</div>
                </Popup>
            </Marker>

            {Object.entries(groupedMarkers).map(([type, markers]) => (
                <LayerGroup key={type}>
                    {markers}
                </LayerGroup>
            ))}
        </MapContainer>

    );
};
