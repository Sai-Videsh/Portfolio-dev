import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const SkillSphere = ({ items, viewMode }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartInfo = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const categories = ['Languages', 'Web Development', 'Databases', 'AI & ML', 'Tools & Software', 'Soft Skills'];

  const baseItems = React.useMemo(() => {
    const N = items.length;
    return items.map((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      
      const sx = Math.cos(theta) * Math.sin(phi);
      const sy = Math.sin(theta) * Math.sin(phi);
      const sz = Math.cos(phi);

      return { ...item, sx, sy, sz, i };
    });
  }, [items]);

  const radius = 200;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const animate = () => {
      if (viewMode === 'sphere' && !isDragging) {
        setRotation((prev) => ({
          x: prev.x * 0.95, // gently return x rotation to 0 when not hovered
          y: (prev.y + 0.002) % (Math.PI * 2)
        }));
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [viewMode, isDragging]);

  const handlePointerDown = (e) => {
    if (viewMode !== 'sphere') return;
    setIsDragging(true);
    setHoveredIndex(null); 
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

    setRotation({
      x: dragStartInfo.current.rotX - deltaY * 0.01,
      y: dragStartInfo.current.rotY + deltaX * 0.01
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`skill-sphere-container mode-${viewMode}`}
      ref={containerRef}
      onMouseLeave={() => { setHoveredIndex(null); setIsDragging(false); }}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      style={{ cursor: viewMode === 'categories' ? 'default' : (isDragging ? 'grabbing' : 'grab') }}
    >
      {viewMode === 'categories' && categories.map((cat, idx) => {
        const numCols = isMobile ? 2 : 3;
        const row = Math.floor(idx / numCols);
        const col = idx % numCols;
        
        const catCenterX = isMobile ? (col - 0.5) * 220 : (col - 1) * 280;
        const catCenterY = isMobile ? (row - 1) * 180 : (row - 0.5) * 220;
        
        return (
          <div 
            key={`label-${cat}`} 
            className="category-background-label"
            style={{
              transform: `translate3d(${catCenterX}px, ${catCenterY - (isMobile ? 50 : 60)}px, 0)`,
              fontSize: isMobile ? '1rem' : '1.2rem',
              width: isMobile ? '200px' : '280px',
              marginLeft: isMobile ? '-100px' : '-140px'
            }}
          >
            {cat}
          </div>
        )
      })}



      {baseItems.map((item) => {
        let xPos, yPos, scale, opacity, zIndex;

        if (viewMode === 'sphere') {
          const cosX = Math.cos(rotation.x);
          const sinX = Math.sin(rotation.x);
          const cosY = Math.cos(rotation.y);
          const sinY = Math.sin(rotation.y);

          let y1 = item.sy * cosX - item.sz * sinX;
          let z1 = item.sy * sinX + item.sz * cosX;
          let x1 = item.sx;

          let x2 = x1 * cosY + z1 * sinY;
          let z2 = -x1 * sinY + z1 * cosY;
          let y2 = y1;

          const perspective = 600;
          const zScaled = z2 * radius;
          scale = perspective / (perspective - zScaled);
          
          let baseOpacity = Math.max(0.15, (z2 + 1) / 2);
          opacity = baseOpacity;
          
          xPos = x2 * radius * scale;
          yPos = y2 * radius * scale;
          zIndex = Math.round((z2 + 1) * 100);
        } else {
          const catIndex = categories.indexOf(item.category);
          const numCols = isMobile ? 2 : 3;
          const row = Math.floor(catIndex / numCols);
          const col = catIndex % numCols;
          
          const itemsInCat = baseItems.filter(b => b.category === item.category);
          const idxInCat = itemsInCat.findIndex(b => b.name === item.name);
          
          const catCenterX = isMobile ? (col - 0.5) * 220 : (col - 1) * 280; 
          const catCenterY = isMobile ? (row - 1) * 180 : (row - 0.5) * 220; 
          
          const colsInCluster = isMobile ? Math.min(itemsInCat.length, 2) : Math.min(itemsInCat.length, 3);
          const subCol = idxInCat % colsInCluster;
          const subRow = Math.floor(idxInCat / colsInCluster);
          const iconSpacing = isMobile ? 55 : 60;
          const offsetX = (subCol - (colsInCluster - 1) / 2) * iconSpacing;
          const offsetY = subRow * iconSpacing - (isMobile ? 10 : 20);
          
          xPos = catCenterX + offsetX;
          yPos = catCenterY + offsetY;
          scale = 0.9;
          opacity = (hoveredIndex === null || hoveredIndex === item.i) ? 1 : 0.2;
          zIndex = hoveredIndex === item.i ? 100 : 1;
        }

        return (
          <div
            key={item.i}
            className={`sphere-item ${hoveredIndex === item.i ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(item.i)}
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
