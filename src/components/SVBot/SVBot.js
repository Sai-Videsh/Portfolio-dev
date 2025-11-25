import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';
import './SVBot.css';

const SVBot = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleBotClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating Bot Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="sv-bot-button"
            onClick={handleBotClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaRobot className="bot-icon" />
            <span className="bot-text">CLONE</span>
            <span className="bot-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              className="bot-popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePopup}
            />

            {/* Popup Card */}
            <motion.div
              className="bot-popup-card"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            >
              {/* Close Button */}
              <button className="bot-popup-close" onClick={handleClosePopup}>
                <FaTimes />
              </button>

              {/* Content */}
              <div className="bot-popup-content">
                {/* HTML Code Format */}
                <div className="html-code-container">
                  {/* DOCTYPE */}
                  <div className="code-line">
                    <span className="code-tag-gray">&lt;!DOCTYPE html&gt;</span>
                  </div>

                  {/* HTML */}
                  <div className="code-line">
                    <span className="code-tag-green">&lt;html</span>
                    <span className="code-attr"> lang</span>
                    <span className="code-equals">=</span>
                    <span className="code-value">"en"</span>
                    <span className="code-tag-green">&gt;</span>
                  </div>

                  {/* HEAD */}
                  <div className="code-line indent-1">
                    <span className="code-tag-green">&lt;head&gt;</span>
                  </div>

                  {/* TITLE */}
                  <div className="code-line indent-2">
                    <span className="code-tag-blue">&lt;title&gt;</span>
                    <span className="code-content-white">SV Bot</span>
                    <span className="code-tag-blue">&lt;/title&gt;</span>
                  </div>

                  {/* CLOSE HEAD */}
                  <div className="code-line indent-1">
                    <span className="code-tag-green">&lt;/head&gt;</span>
                  </div>

                  {/* BODY */}
                  <div className="code-line indent-1">
                    <span className="code-tag-green">&lt;body&gt;</span>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="code-line indent-2">
                    <span className="code-tag-blue">&lt;description&gt;</span>
                  </div>
                  <div className="code-line indent-3">
                    <span className="code-content-white">
                      This is a mini-me!! It will show you around my portfolio and answer your questions about me, even the things this portfolio doesn't have. Only Professional stuff though!
                    </span>
                  </div>
                  <div className="code-line indent-2">
                    <span className="code-tag-blue">&lt;/description&gt;</span>
                  </div>

                  {/* FEATURES UL */}
                  <div className="code-line indent-2">
                    <span className="code-tag-blue">&lt;features&gt;</span>
                  </div>
                  <div className="code-line indent-3">
                    <span className="code-tag-lightblue">&lt;ul&gt;</span>
                  </div>

                  {/* LI ITEMS */}
                  <div className="code-line indent-4">
                    <span className="code-tag-purple">&lt;li&gt;</span>
                    <span className="code-content-white">Ask about projects, experiences & tech stack</span>
                    <span className="code-tag-purple">&lt;/li&gt;</span>
                  </div>
                  <div className="code-line indent-4">
                    <span className="code-tag-purple">&lt;li&gt;</span>
                    <span className="code-content-white">Guide you through my portfolio</span>
                    <span className="code-tag-purple">&lt;/li&gt;</span>
                  </div>
                  <div className="code-line indent-4">
                    <span className="code-tag-purple">&lt;li&gt;</span>
                    <span className="code-content-white">Know more than what my portfolio shows</span>
                    <span className="code-tag-purple">&lt;/li&gt;</span>
                  </div>

                  {/* CLOSE UL */}
                  <div className="code-line indent-3">
                    <span className="code-tag-lightblue">&lt;/ul&gt;</span>
                  </div>
                  <div className="code-line indent-2">
                    <span className="code-tag-blue">&lt;/features&gt;</span>
                  </div>

                  {/* ALERT */}
                  <div className="code-line indent-2">
                    <span className="code-tag-blue">&lt;alert&gt;</span>
                    <span className="code-content-alert">COMING SOON</span>
                    <span className="code-tag-blue">&lt;/alert&gt;</span>
                    <div className="alert-glow"></div>
                  </div>

                  {/* CLOSE BODY */}
                  <div className="code-line indent-1">
                    <span className="code-tag-green">&lt;/body&gt;</span>
                  </div>

                  {/* CLOSE HTML */}
                  <div className="code-line">
                    <span className="code-tag-green">&lt;/html&gt;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SVBot;
