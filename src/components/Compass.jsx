// src/components/DeviceOrientation.js
import React, { useState, useEffect } from 'react';

const DeviceOrientation = () => {
  const [beta, setBeta] = useState(null); // Tilt along the X-axis
  const [gamma, setGamma] = useState(null); // Tilt along the Y-axis
    
  useEffect(() => {
    const handleOrientation = (event) => {
      setBeta(event.beta || 0); // Tilt forward/backward
      setGamma(event.gamma || 0); // Tilt left/right
    };
    useEffect(() => {
  const handleOrientation = (event) => {
    setBeta(event.beta || 0);
    setGamma(event.gamma || 0);
  };
  
  const requestPermission = async () => {
    if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const permission = await DeviceOrientationEvent.requestPermission();

      if (permission === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation);
      } else {
        console.log('Permission not granted');
      }
    } else if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    } else {
      console.log('Device Orientation not supported');
    }
  };

  requestPermission();

  return () => {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', handleOrientation);
    }
  };
}, []);

    // Add event listener for device orientation
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    } else {
      console.log('Device Orientation not supported');
    }

    // Cleanup event listener on component unmount
    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  return (
    <div>
      <h1>Device Orientation</h1>
      <p>Beta (Tilt forward/backward): {beta !== null ? beta.toFixed(2) : 'Not available'}</p>
      <p>Gamma (Tilt left/right): {gamma !== null ? gamma.toFixed(2) : 'Not available'}</p>
    </div>
  );
};

export default DeviceOrientation;
