// Projects.jsx (updated with resume projects)

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

const ProjectsSection = styled.section`
  max-width: 1100px;
  padding: 100px 0;
  margin: 0 auto;

  h2 {
    font-size: clamp(26px, 5vw, 32px);
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-weight: 600;
    margin-bottom: 60px;

    &::before {
      content: '04.';
      margin-right: 10px;
      color: ${({ theme }) => theme.colors.green};
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 20px;
    }
  }
`;

const ProjectWrapper = styled(motion.div)`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 100px;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.navy};
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 12px;
  min-height: 300px;
  box-shadow: 0 12px 30px rgba(2, 12, 27, 0.6);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }

  .placeholder {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.green};
    opacity: 0.7;
  }
`;

const Content = styled.div`
  flex: 1.2;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 24px;
  border-radius: 8px;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 24px rgba(2, 12, 27, 0.4);

  h3 {
    font-size: 22px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.lightestSlate};
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.slate};
    line-height: 1.5;
  }

  .stack {
    margin-top: 16px;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.lightSlate};
  }

  .links {
    margin-top: 16px;
    display: flex;
    gap: 12px;

    a {
      color: ${({ theme }) => theme.colors.green};
      font-size: 20px;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Projects = () => {
  const featured = [
  {
    title: 'BookTracker',
    description:
      'A personal book management platform designed to help readers track, organize, and discover books more meaningfully. Used by students to manage reading goals and wishlist titles across devices.',
    tech: 'React · Node.js · Google Books API · Web Scraping · Multithreading',
    image: null,
    github: 'https://github.com/stevengorlicki/bookkeeper',
    external: null
  },
  {
    title: 'AI Sign Language Translator',
    description:
      'Built an AI system that helps bridge communication gaps by translating continuous American Sign Language into English. Supports future accessibility tools for non-verbal users and interpreters.',
    tech: 'Python · PyTorch · CNN-LSTM · Transformer · MediaPipe · Machine Learning',
    image: null,
    github: null,
    external: null,
    pdf: true
  },
  {
    title: 'Machine Learning Sudoku Solver',
    description:
      'Created a smart puzzle solver that rapidly cracks Sudoku boards of various sizes. Useful for educational demos and AI problem-solving showcases in constraint-based environments.',
    tech: 'Python · Machine Learning · Constraint Satisfaction · Algorithm Optimization',
    image: null,
    github: 'https://github.com/stevengorlicki/sudoku-solver',
    external: null
  },
  {
    title: 'Black in Tech @ UCI Website',
    description:
      'Launched an official site for UCI’s Black in Tech community, promoting events, mentorship, and career opportunities for underrepresented students in tech fields.',
    tech: 'React · JavaScript · CSS · nginx · VM Deployment · OpenLab',
    image: null,
    github: null,
    external: 'https://blackintech.ics.uci.edu'
  }
];


  return (
    <ProjectsSection id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Projects I've Built
      </motion.h2>

      {featured.map((proj, i) => (
        <ProjectWrapper
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ImageWrapper>
            {proj.image ? (
              <img src={proj.image} alt={`${proj.title} preview`} />
            ) : (
              <div className="placeholder">
                <FiFileText />
              </div>
            )}
          </ImageWrapper>

          <Content>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="stack">{proj.tech}</div>
            <div className="links">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
              )}
              {proj.external && (
                <a href={proj.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                  <FiExternalLink />
                </a>
              )}
              {proj.pdf && (
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="PDF Documentation">
                  <FiFileText />
                </a>
              )}
            </div>
          </Content>
        </ProjectWrapper>
      ))}
    </ProjectsSection>
  );
};

export default Projects;