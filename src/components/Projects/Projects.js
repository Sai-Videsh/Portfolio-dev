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
      title: 'E-Commerce Platform',
      tagline: 'Full-stack shopping experience',
      description: 'A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com',
    },
    {
      id: 2,
      title: 'Social Media App',
      tagline: 'Connect and share instantly',
      description: 'Real-time social media application with chat functionality, posts, likes, and user authentication.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'frontend',
      github: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management System',
      tagline: 'Organize your workflow',
      description: 'Collaborative task management tool with drag-and-drop, team collaboration, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['TypeScript', 'React', 'Express'],
      category: 'fullstack',
      github: 'https://github.com',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      tagline: 'Real-time weather insights',
      description: 'Beautiful weather application with real-time data, forecasts, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'API', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com',
    },
    {
      id: 5,
      title: 'RESTful API',
      tagline: 'Scalable backend solution',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      category: 'backend',
      github: 'https://github.com',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      tagline: 'Showcase your work beautifully',
      description: 'Modern, responsive portfolio with animations, dark mode, and smooth transitions.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['React', 'Framer Motion', 'CSS'],
      category: 'frontend',
      github: 'https://github.com',
    },
  ];

  const categories = ['all', 'fullstack', 'frontend', 'backend'];

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
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass-card"
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"></div>
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
