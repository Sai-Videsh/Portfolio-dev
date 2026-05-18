import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaTerminal, FaCode, FaPaintBrush } from 'react-icons/fa';
import './FreelanceTestimonials.css';

const FreelanceTestimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const testimonials = [
    {
      id: 1,
      project: 'DropIQ Search Engine',
      client: 'Anish, Co-founder',
      icon: <FaCode />,
      title: 'Backend & Strategy Pivot',
      text: 'All we had was an idea. Videsh turned it into a working product, he handled the frontend, backend, database, deployment, and the AI integration himself. The search is fast, the UI looks clean, and users are happy. Good guy to have when you need something built properly.',
      link: 'https://dropiq-nine.vercel.app/',
    },
    {
      id: 2,
      project: 'Tabun Chai',
      client: 'Ramesh, Founder',
      icon: <FaPaintBrush />,
      title: 'Design & Vibe',
      text: 'Just wanted a simple website for my cafe. Videsh came in talking about colors and how customers think, and honestly I was skeptical at first. But the layout felt natural straight away and people keep saying they love the vibe. Knows his stuff.',
      link: 'https://github.com/Sai-Videsh/cl-1',
    },
    {
      id: 3,
      project: 'Narayana Schools',
      client: 'K Suresh, Admin Branch',
      icon: <FaTerminal />,
      title: 'Smooth Interactive Cursors',
      text: 'Needed a landing page for our Chittoor branch. Videsh added some classic effects that looked really nice. I was worried the cursor effects would lag on phones but he handled that well, desktop gets the glowing trail and mobile stays clean and fast. Very happy with how it turned out.',
      link: 'https://github.com/Sai-Videsh/Narayana_School_Ctr',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="freelance-testimonials" className="freelance-testimonials section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Freelance Testimonials
          {inView && <span className="typed-text">Freelance Testimonials</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((t) => (
            <motion.a
              key={t.id}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-card glass-card"
              style={{ textDecoration: 'none' }}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-top">
                <div className="testimonial-icon">{t.icon}</div>
                <div className="quote-mark">
                  <FaQuoteLeft />
                </div>
              </div>

              <div className="testimonial-meta">
                <h4 className="meta-project">{t.project}</h4>
                <p className="meta-client">{t.client}</p>
              </div>

              <div className="terminal-divider">
                <span className="divider-line"></span>
                <span className="divider-tag">[ TESTIMONIAL ]</span>
                <span className="divider-line"></span>
              </div>

              <h4 className="testimonial-title">{t.title}</h4>
              <p className="testimonial-text">"{t.text}"</p>

              <div className="testimonial-link-hint">
                <span>[ {t.link.includes('github') ? 'View Live Site' : 'View Product'} ]</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* SV Agency Banner */}
        <motion.div
          className="agency-banner glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="agency-header-mobile">
            <span className="agency-badge">SV AGENCY</span>
            <span className="team-badge">TEAM OF 2</span>
          </div>
          <div className="agency-left">
            <span className="agency-badge">SV AGENCY</span>
            <span className="team-badge">TEAM OF 2</span>
          </div>
          
          <div className="agency-center">
            <p className="agency-desc">
              We help restaurants, salons, and retail shops in Bengaluru get more repeat customers using AI voice agents, automated review follow-ups, and loyalty programs. Set up in under a week, no tech knowledge needed.
            </p>
          </div>

          <div className="agency-right">
            <motion.a 
              href="https://svagency.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="agency-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Visit Agency ]
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceTestimonials;
