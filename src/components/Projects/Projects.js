import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'DropIQ',
      tagline: 'Unified E-Commerce Search Engine',
      description: 'Built a unified scraper pipeline across 5+ e-commerce sites using rotating proxies, reverse APIs, headless browsers, and HTML parsing, achieving 92% product-page coverage.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Next', 'Web Scraping', 'APIs'],
      category: 'fullstack',
      github: 'https://github.com/Sai-Videsh/DropiQ',
      liveLink: 'https://dropiq01.vercel.app/',
    },
    {
      id: 2,
      title: 'Loomio',
      tagline: 'Community & Task Management',
      description: 'A full-stack task and community management system supporting 3 user roles, 5+ core modules, and real-time activity handling. It enables task assignment, attendance tracking, and contribution scoring across distributed communities.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Full Stack', 'Real-time', 'Community'],
      category: 'fullstack',
      github: 'https://github.com/Sai-Videsh/Loomio',
      liveLink: 'https://loomio-cbtm.vercel.app/',
    },
    {
      id: 3,
      title: 'Anomaly Detection using FRAPE',
      tagline: 'Machine Learning Project',
      description: 'Advanced anomaly detection system leveraging FRAPE algorithm for identifying unusual patterns in data.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['Python', 'ML', 'FRAPE'],
      category: 'ml',
      github: 'https://github.com/Sai-Videsh/Cybersecurity_Sys_log_detection',
    },
    {
      id: 4,
      title: 'Co-Work spaces Near Me',
      tagline: 'Location-based Discovery',
      description: 'Platform to find and book co-working spaces based on user location with real-time availability.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['React', 'Maps API', 'Location'],
      category: 'fullstack',
      github: 'https://github.com/Sai-Videsh/Co-Working-Spaces',
    },
    {
      id: 5,
      title: 'Hostel Tracker',
      tagline: 'Management System',
      description: 'Comprehensive hostel management system for tracking students, rooms, attendance, and facilities.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
      tags: ['Full Stack', 'Database', 'Management'],
      category: 'fullstack',
      github: 'https://github.com/Sai-Videsh/hostel_management_system',
    },
    {
      id: 6,
      title: 'AI Contracts Generator',
      tagline: 'AI-Powered Legal Docs',
      description: 'Automated contract generation system using AI to create customized legal documents based on user inputs.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      tags: ['AI', 'NLP', 'Automation'],
      category: 'ml',
      github: 'https://github.com/Sai-Videsh/ai-contract---proposal',
    },
  ];

  const categories = ['all', 'fullstack', 'ml'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Featured Projects
          {inView && <span className="typed-text">Featured Projects</span>}
        </motion.h2>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.liveLink || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass-card"
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.liveLink && project.liveLink !== '#' && (
                    <div className="live-indicator">
                      <span className="live-dot"></span>
                      Live
                    </div>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tagline">{project.tagline}</span>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
