// tells next.js this component uses browser features (not server-side)
'use client';

// import react hooks for managing state and side effects
import { useState, useEffect } from 'react';

// main component function that receives props (text to type, speeds, etc.)
export default function Typewriter({ 
  text,                    // the text we want to type out
  speed = 100,            // how fast to type (milliseconds per character)
  deleteSpeed = 50,       // how fast to delete (milliseconds per character)
  pauseTime = 2000        // how long to pause after typing before deleting
}) {
  
  // state to track what text is currently shown on screen
  const [displayed, setDisplayed] = useState('');
  
  // state to track if we're currently deleting or typing
  const [isDeleting, setIsDeleting] = useState(false);

  // useeffect runs when component mounts and when dependencies change
  useEffect(() => {
    
    // keep track of which character we're on (starts at 0)
    let currentIndex = 0;
    
    // store timeout id so we can cancel it later if needed
    let timeoutId;
    
    // main animation function that handles typing and deleting
    const animate = () => {
      
      // check if we're in typing mode (not deleting)
      if (!isDeleting) {
        
        // typing phase: add one character at a time
        if (currentIndex < text.length) {
          // get substring from start to current position + 1
          setDisplayed(text.substring(0, currentIndex + 1));
          // move to next character
          currentIndex++;
          // schedule next character to be typed after 'speed' milliseconds
          timeoutId = setTimeout(animate, speed);
        } else {
          // we've typed the whole word, now pause before deleting
          timeoutId = setTimeout(() => {
            // switch to deleting mode
            setIsDeleting(true);
          }, pauseTime);
        }
        
      } else {
        
        // deleting phase: remove one character at a time
        if (currentIndex > 0) {
          // move back one character
          currentIndex--;
          // update display to show text without the last character
          setDisplayed(text.substring(0, currentIndex));
          // schedule next deletion after 'deleteSpeed' milliseconds
          timeoutId = setTimeout(animate, deleteSpeed);
        } else {
          // we've deleted everything, switch back to typing mode
          setIsDeleting(false);
          // start typing again immediately
          timeoutId = setTimeout(animate, speed);
        }
      }
    };

    // start the animation cycle
    animate();

    // cleanup function: runs when component unmounts or dependencies change
    // this prevents memory leaks by clearing any pending timeouts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
    
  }, [text, speed, deleteSpeed, pauseTime, isDeleting]); // re-run effect if these values change

  // render the component: show current text + blinking cursor
  return (
    <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-fira tracking-wide">
      {displayed} {/* the text that's currently being displayed */}
      <span className="animate-pulse text-cyan-400">|</span> {/* blinking cursor */}
    </h2>
  );
}