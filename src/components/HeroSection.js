import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    // add more images here later if you like
  ];
  
  const [index, setIndex] = useState(0);

  // Automatically switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <div className="hero">
      <img src={images[index]} alt={`slide-${index}`} />
      <div className="hero-text">
        <h1>Extruded polystyrene</h1>
        <p>Protecting waterstops with extruded polystyrene</p>
      </div>
    </div>
  );
}