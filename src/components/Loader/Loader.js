import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const stages = [
    '> Initializing system',
    '> Loading modules',
    '> Compiling assets',
    '> LEARN-BREAK-REPEAT',
  ];

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (loadingStage >= stages.length) {
      setTimeout(() => {
        onLoadComplete();
      }, 1000);
      return;
    }

    const currentStage = stages[loadingStage];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentStage.length) {
        setDisplayText(currentStage.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Increased delay time - hold each loading phrase longer before moving to next
        setTimeout(() => {
          if (loadingStage < stages.length - 1) {
            setLoadingStage(prev => prev + 1);
          } else {
            // Hold on "LEARN-BREAK-REPEAT" for a moment
            setTimeout(() => {
              setLoadingStage(prev => prev + 1);
            }, 1500);
          }
        }, loadingStage === stages.length - 1 ? 0 : 1500); // Increased from 500ms to 1500ms
      }
    }, loadingStage === stages.length - 1 ? 100 : 50);

    return () => clearInterval(typingInterval);
  }, [loadingStage]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-content">
          <div className="loader-grid">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>

          <motion.div
            className="loader-text-container"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {loadingStage < stages.length - 1 ? (
              <>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-text">{displayText}</span>
                  <span className="loading-dots">...</span>
                  {showCursor && <span className="terminal-cursor">_</span>}
                </div>
                <div className="loading-bar-container">
                  <motion.div
                    className="loading-bar"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((loadingStage + 1) / stages.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </>
            ) : (
              <motion.div
                className="sv-presents"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="sv-letters">
                  {displayText.split('-').map((word, wordIndex) => (
                    <span key={wordIndex} className="word-group">
                      {word.split('').map((char, charIndex) => (
                        <motion.span
                          key={`${wordIndex}-${charIndex}`}
                          className="letter"
                          data-letter={char}
                          initial={{ opacity: 0, rotateX: 90, translateZ: -50 }}
                          animate={{ opacity: 1, rotateX: 0, translateZ: 0 }}
                          transition={{
                            delay: (wordIndex * 5 + charIndex) * 0.08,
                            duration: 0.6,
                            type: 'spring',
                            stiffness: 150,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                      {wordIndex < 2 && <span className="hyphen">-</span>}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="tagline-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  cycle starts
                </motion.div>
                <motion.div
                  className="glow-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.2, duration: 1, ease: 'easeInOut' }}
                />
              </motion.div>
            )}
          </motion.div>

          <div className="corner-brackets">
            <div className="bracket top-left">[</div>
            <div className="bracket top-right">]</div>
            <div className="bracket bottom-left">[</div>
            <div className="bracket bottom-right">]</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
