import React, { useEffect } from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
const apiKey = import.meta.env.VITE_MAP_API_KEY;

const MapComponent = () => {
  useEffect(() => {
    // Create the map centered on India
    const map = L.map('map', {
      center: [20.5937, 78.9629],
      zoom: 4,
      minZoom: 4,
      maxZoom: 7,
      zoomControl: true,
    });

    // Restrict map bounds to India and surrounding area
    const indiaBounds = [
      [6.4626999, 68.1097],
      [35.6745457, 97.39535869999999],
    ];
    map.setMaxBounds(indiaBounds);
    map.on('drag', () => {
      map.panInsideBounds(indiaBounds, { animate: false });
    });

    // MapTiler API key (replace with your own)
    const mapTilerKey = apiKey;

    // MapTiler map tiles
    L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerKey}`, {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      maxZoom: 20
    }).addTo(map);

    // Add GeoJSON layer for India's borders
    fetch('https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/india_states.geojson')
      .then(response => response.json())
      .then(data => {
        L.geoJSON(data, {
          style: {
            color: '#2563eb',
            weight: 2,
            fillOpacity: 0.1,
            fillColor: '#3b82f6'
          }
        }).addTo(map);
      });

    // Custom icon using SVG for better quality
    const customIcon = L.divIcon({
      html: `<svg width="35" height="35" viewBox="0 0 24 24" fill="#2563eb" stroke="#ffffff" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3" fill="#ffffff"></circle>
            </svg>`,
      className: 'custom-pin',
      iconSize: [40, 40],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24],
    });

    // State capitals data with research facility information
    const stateCapitals = [
      {
        name: 'Delhi',
        lat: 28.6139,
        lon: 77.209,
        info: { equipment: 20, labs: 5, centers: 2 }
      },
      {
        name: 'Chennai',
        lat: 13.0827,
        lon: 80.2707,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Mumbai',
        lat: 19.076,
        lon: 72.8777,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Bangalore',
        lat: 12.9716,
        lon: 77.5946,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Kolkata',
        lat: 22.5726,
        lon: 88.3639,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Hyderabad',
        lat: 17.3850,
        lon: 78.4867,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Gandhinagar',
        lat: 23.2156,
        lon: 72.6369,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Jaipur',
        lat: 26.9124,
        lon: 75.7873,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Bhopal',
        lat: 23.2599,
        lon: 77.4126,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Lucknow',
        lat: 26.8467,
        lon: 80.9462,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Patna',
        lat: 25.5941,
        lon: 85.1376,
        info: { equipment: 1123, labs: 549, centers: 58 }
      },
      {
        name: 'Bhubaneswar',
        lat: 20.2961,
        lon: 85.8245,
        info: { equipment: 1123, labs: 549, centers: 58 }
      }
    ];

    // Add markers with custom popups
    stateCapitals.forEach((state) => {
      const marker = L.marker([state.lat, state.lon], { icon: customIcon }).addTo(map);
      
      const popupContent = `
        <div class="p-2 min-w-[200px]">
          <h3 class="font-bold text-lg mb-2 text-blue-600">${state.name}</h3>
          <div class="space-y-2">
            <p class="flex justify-between">
              <span class="text-gray-600">Equipment:</span>
              <span class="font-semibold">${state.info.equipment.toLocaleString()}</span>
            </p>
            <p class="flex justify-between">
              <span class="text-gray-600">Labs:</span>
              <span class="font-semibold">${state.info.labs.toLocaleString()}</span>
            </p>
            <p class="flex justify-between">
              <span class="text-gray-600">Incubation Centers:</span>
              <span class="font-semibold">${state.info.centers.toLocaleString()}</span>
            </p>
          </div>
        </div>
      `;

      const popup = L.popup({
        maxWidth: 300,
        className: 'custom-popup'
      }).setContent(popupContent);

      marker.bindPopup(popup);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Infrastructure Map
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore research facilities across India. Click on any marker to view detailed information about equipment, laboratories, and incubation centers in each location.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative">
          <div id="map" className="w-full h-[600px] rounded-2xl shadow-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;