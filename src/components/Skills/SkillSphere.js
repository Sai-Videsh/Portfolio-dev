import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const SkillSphere = ({ items }) => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  
  // Track 3D rotation
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Interaction states
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartInfo = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const animationRef = useRef(null);

  // Smaller radius for a neat, professional look
  const radius = 160;

  // Auto-rotation loop
  useEffect(() => {
    const animate = () => {
      if (!isHovered && !isDragging) {
        setRotation((prev) => ({
          x: prev.x,
          y: (prev.y + 0.002) % (Math.PI * 2)
        }));
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, isDragging]);

  useEffect(() => {
    const N = items.length;
    const newPositions = items.map((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      return { x, y, z, ...item };
    });
    setPositions(newPositions);
  }, [items]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartInfo.current = {
      x: e.clientX || (e.touches && e.touches[0].clientX),
      y: e.clientY || (e.touches && e.touches[0].clientY),
      rotX: rotation.x,
      rotY: rotation.y
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    const deltaX = clientX - dragStartInfo.current.x;
    const deltaY = clientY - dragStartInfo.current.y;

    const sensitivity = 0.01;

    setRotation({
      x: dragStartInfo.current.rotX - deltaY * sensitivity,
      y: dragStartInfo.current.rotY + deltaX * sensitivity
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="skill-sphere-container" 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {positions.map((item, i) => {
        // Apply 3D rotation matrices
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);

        // Rotate X
        let y1 = item.y * cosX - item.z * sinX;
        let z1 = item.y * sinX + item.z * cosX;
        let x1 = item.x;

        // Rotate Y
        let x2 = x1 * cosY + z1 * sinY;
        let z2 = -x1 * sinY + z1 * cosY;
        let y2 = y1;

        const rotatedX = x2;
        const rotatedY = y2;
        const rotatedZ = z2;

        // Use higher perspective value to reduce extreme giant scale in the front
        const perspective = 600;
        const zScaled = rotatedZ * radius;
        const scale = perspective / (perspective - zScaled);
        
        // Depth-based opacity fading
        const opacity = Math.max(0.15, (rotatedZ + 1) / 2);

        const xPos = rotatedX * radius * scale;
        const yPos = rotatedY * radius * scale;
        const zIndex = Math.round((rotatedZ + 1) * 100);

        return (
          <div
            key={i}
            className="sphere-item"
            style={{
              transform: `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale})`,
              opacity: opacity,
              zIndex: zIndex,
            }}
          >
            <div className="sphere-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="skill-name-tooltip">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSphere;
