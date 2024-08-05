import React, { useState, useEffect } from 'react';
import BlueCircle from "../assets/blue_circle.svg";
import GreenCircle from "../assets/green_circle.svg";
import StarFinder from "../assets/star_finder.svg";
import Compass from "../assets/compass.svg";
import AngleFinder from "../assets/angle_finder.svg";
import AngleBackground from "../assets/angle_background.svg";
import "./css/DeviceOrientation.css";

const DeviceOrientation = () => {
    const [alpha, setAlpha] = useState(null); // Compass direction
    const [beta, setBeta] = useState(null); // Tilt along the X-axis
    const [gamma, setGamma] = useState(null); // Tilt along the Y-axis
    const [starAngle, setStarAngle] = useState(Math.random() * 360);
    const [starHeight, setStarHeight] = useState(Math.random() * 90);

  useEffect(() => {
    const handleOrientation = (event) => {
        let temp = event.alpha;
        if (event.webkitCompassHeading) {
            temp = event.webkitCompassHeading; // Compass direction
        }
        setAlpha(temp || 0); // Compass direction
        setBeta(event.beta || 0); // Tilt forward/backward
        setGamma(event.gamma || 0); // Tilt left/right
    };

    const requestPermission = async () => {
        if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
          const permission = await DeviceOrientationEvent.requestPermission();
    
          if (permission === 'granted') {
            if ('ondeviceorientationabsolute' in window) {
              window.addEventListener('deviceorientationabsolute', handleOrientation);
            } else {
              window.addEventListener('deviceorientation', handleOrientation);
            }
          } else {
            console.log('Permission not granted');
          }
        } else if ('ondeviceorientationabsolute' in window) {
          window.addEventListener('deviceorientationabsolute', handleOrientation);
        } else if (window.DeviceOrientationEvent) {
          window.addEventListener('deviceorientation', handleOrientation);
        } else {
          console.log('Device Orientation not supported');
        }
      };
    
      requestPermission();
    
      return () => {
        if ('ondeviceorientationabsolute' in window) {
          window.removeEventListener('deviceorientationabsolute', handleOrientation);
        } else if (window.DeviceOrientationEvent) {
          window.removeEventListener('deviceorientation', handleOrientation);
        }
      };
    }, []);

return (
    <div className="finders">
        <div className="finders--container">
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={AngleBackground} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <img src={AngleFinder} style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) rotate(${starHeight}deg)` }} />
                <img src={GreenCircle} style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) rotate(${-beta+90}deg)` }} />
            </div>
        </div>
        <div className="finders--container">
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={StarFinder} style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) rotate(${starAngle - alpha}deg)` }} />
                <img src={Compass} style={{ position: 'aboslute', top: '50%', left: '50%', transform: `rotate(${-alpha}deg)`, transformOrigin: '50% 50%' }} />
                <img src={BlueCircle} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
        </div>
    </div>
);
};

export default DeviceOrientation;