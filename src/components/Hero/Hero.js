import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
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
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="code-block">
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
          </div>
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
