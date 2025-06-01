'use client';
import { useState, useEffect } from 'react';

export default function Typewriter({ 
  text, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}) {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;
    
    const animate = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayed(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(animate, speed);
        } else {
          // Finished typing, pause then start deleting
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayed(text.substring(0, currentIndex));
          timeoutId = setTimeout(animate, deleteSpeed);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
          timeoutId = setTimeout(animate, speed);
        }
      }
    };

    animate();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, deleteSpeed, pauseTime, isDeleting]);

  return (
    <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-fira tracking-wide">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </h2>
  );
}