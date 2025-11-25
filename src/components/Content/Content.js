import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBlog, FaYoutube } from 'react-icons/fa';
import './Content.css';

const Content = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contentItems = [
    {
      id: 1,
      title: 'Technical Blog',
      description: 'Sharing insights on New Technological inventions, science behind existing ones and news related to entrepreneurship',
      icon: <FaBlog />,
      link: '#', // Add your blog URL
      count: 'Coming Soon',
    },
    {
      id: 2,
      title: 'YouTube Channel',
      description: 'Simple takes on business, finance, productivity science, and practical learning, Mainly for students exploring multiple things',
      icon: <FaYoutube />,
      link: '#', // Add your YouTube channel URL
      count: 'Coming Soon',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="content" className="content section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Content Record
          {inView && <span className="typed-text">Content Record</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="content-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {contentItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="content-icon">{item.icon}</div>
              <h3 className="content-title">{item.title}</h3>
              <p className="content-description">{item.description}</p>
              <div className="content-count">{item.count}</div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
