import React, { useEffect, useRef } from 'react';
import '../../styles/leavesFalling.css';

const SakuraLeaves: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
      const numLeaves = 20;
      for (let i = 0; i < numLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'sakura';
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 10 + 15}s`;
        leaf.style.animationDelay = `${Math.random() * 10}s`;
        leaf.style.width = `${Math.random() * 20 + 20}px`;
        leaf.style.height = leaf.style.width;


        leaf.style.animationName = 'fallVariation';

        container.appendChild(leaf);
      }
    }
  
      return () => {
        if (container) {
          container.innerHTML = '';
        }
      };
    }, []);
  
    return <div className="sakura-container" ref={containerRef}></div>;
  };

export default SakuraLeaves;
