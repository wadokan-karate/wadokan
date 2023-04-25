import React, { useEffect, useRef } from 'react';

function Mapa() {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // Las ubicaciones del marcador
  const ubicaciones = [
    { lat: 37.33153449999999, lng: -5.9274746999999985 },
    { lat: 37.3986959, lng: -5.9941631 },
    { lat: 37.386455, lng: -5.998743 }
  ];

  useEffect(() => {
    // Crea el mapa de Google Maps
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 37.33153449999999, lng: -5.9274746999999985 },
      zoom: 12
    });

    // Crea los marcadores y los agrega al mapa
    ubicaciones.forEach((ubicacion) => {
      const marker = new window.google.maps.Marker({
        position: ubicacion,
        map: googleMap,
        title: 'Ubicación'
      });
    });
  }, []);

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: '100%', height: '400px' }}
    />
  );
}

export default Mapa;
