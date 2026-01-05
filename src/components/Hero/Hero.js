import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaDownload, FaUndo } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [fallingBricks, setFallingBricks] = useState([]);
  const [hiddenElements, setHiddenElements] = useState([]);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controlsCode = useAnimation();

  const handleDoubleClick = () => {
    setIsDoubleClicked(true);
  };

  const createFallingBricks = (elementId, x, y, width, height) => {
    const brickSize = 20;
    const cols = Math.ceil(width / brickSize);
    const rows = Math.ceil(height / brickSize);
    const newBricks = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newBricks.push({
          id: `${elementId}-${row}-${col}`,
          x: x + col * brickSize,
          y: y + row * brickSize,
          size: brickSize,
          rotation: Math.random() * 360,
          delay: Math.random() * 0.2,
        });
      }
    }

    setFallingBricks(prev => [...prev, ...newBricks]);
    setHiddenElements(prev => [...prev, elementId]);

    // Clear bricks after animation
    setTimeout(() => {
      setFallingBricks(prev => prev.filter(brick => !brick.id.startsWith(elementId)));
    }, 2000);
  };

  const handleCodeBlockDragEnd = (event, info) => {
    // Get current position
    const currentX = info.point.x;
    const currentY = info.point.y;

    // Create falling effect only for code block
    createFallingBricks('code', currentX - 150, currentY - 100, 300, 200);

    // Reset position after a delay
    setTimeout(() => {
      controlsCode.start({ x: 0, y: 0 });
      setHiddenElements(prev => prev.filter(id => id !== 'code'));
    }, 2000);
  };

  const resetPositions = () => {
    controls1.start({ x: 0, y: 0 });
    controls2.start({ x: 0, y: 0 });
    controls3.start({ x: 0, y: 0 });
    controlsCode.start({ x: 0, y: 0 });
    setIsDoubleClicked(false);
    setHiddenElements([]);
    setFallingBricks([]);
  };

  const socialLinks = [
    { icon: <FaGithub />, url: process.env.REACT_APP_GITHUB, label: 'GitHub' },
    { icon: <FaLinkedin />, url: process.env.REACT_APP_LINKEDIN, label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: process.env.REACT_APP_LEETCODE, label: 'LeetCode' },
    // { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Sai Videsh</span>
          </motion.h1>

          <div className="hero-subtitle">
            <TypeAnimation
              sequence={[
                'Building Solutions',
                2000,
                'Content Creator',
                2000,
                'Full Stack Developer',
                2000,
                'Freelancer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I blend experience across coding, design, content, and early product building, giving me a practical, multi-skill foundation.
Now I’m building DropIQ and an AI-focused agency while learning agentic AI, RAG, and rapid MVP development.
 </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="/resume.pdf" download="Sai_Videsh_Resume.pdf" className="btn-secondary">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {!isDoubleClicked && (
            <motion.div 
              className="drag-hint"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="hint-text">[ DOUBLE CLICK AND DRAG ]</span>
            </motion.div>
          )}

          <motion.div 
            className="geometric-shape shape-1"
            drag={isDoubleClicked}
            dragConstraints={{ left: -250, right: 250, top: -200, bottom: 200 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 50 }}
            whileHover={isDoubleClicked ? { cursor: 'grab' } : {}}
            onDoubleClick={handleDoubleClick}
            animate={controls1}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <motion.div 
            className="geometric-shape shape-2"
            drag={isDoubleClicked}
            dragConstraints={{ left: -250, right: 250, top: -200, bottom: 200 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 50 }}
            whileHover={isDoubleClicked ? { cursor: 'grab' } : {}}
            onDoubleClick={handleDoubleClick}
            animate={controls2}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <motion.div 
            className="geometric-shape shape-3"
            drag={isDoubleClicked}
            dragConstraints={{ left: -250, right: 250, top: -200, bottom: 200 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 50 }}
            whileHover={isDoubleClicked ? { cursor: 'grab' } : {}}
            onDoubleClick={handleDoubleClick}
            animate={controls3}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <motion.div 
            className="code-block"
            drag={isDoubleClicked}
            dragConstraints={false}
            dragElastic={0}
            whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 50 }}
            whileHover={isDoubleClicked ? { cursor: 'grab' } : {}}
            onDoubleClick={handleDoubleClick}
            onDragEnd={handleCodeBlockDragEnd}
            animate={controlsCode}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ opacity: hiddenElements.includes('code') ? 0 : 1 }}
          >
            <span className="code-line">
              <span className="keyword">const</span> developer = {'{'}
            </span>
            <span className="code-line indent">
              name: <span className="string">"Sai Videsh"</span>,
            </span>
            <span className="code-line indent">
              skills: <span className="string">["Python", "ML", "Web Dev"]</span>,
            </span>
            <span className="code-line indent">
              passion: <span className="string">"Try-Learn-Refine"</span>
            </span>
            <span className="code-line">{'}'}</span>
          </motion.div>

          {isDoubleClicked && (
            <motion.button
              className="reset-btn"
              onClick={resetPositions}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUndo /> Reset
            </motion.button>
          )}

          {/* Falling Bricks */}
          {fallingBricks.map((brick) => (
            <motion.div
              key={brick.id}
              className="falling-brick"
              initial={{ 
                x: brick.x, 
                y: brick.y, 
                opacity: 1, 
                rotate: 0,
                scale: 1
              }}
              animate={{ 
                y: 800, 
                opacity: 0, 
                rotate: brick.rotation,
                scale: 0.5
              }}
              transition={{ 
                duration: 1.5, 
                delay: brick.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                width: brick.size,
                height: brick.size,
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
