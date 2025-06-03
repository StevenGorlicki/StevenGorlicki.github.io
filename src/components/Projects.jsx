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
  margin-bottom: 50px;

  &:nth-of-type(even) {
    flex-direction: row-reverse;

    .content {
      border-right: 2px solid ${({ theme }) => theme.colors.green};
      border-left: none;
    }
  }

  &:nth-of-type(odd) {
    .content {
      border-left: 2px solid ${({ theme }) => theme.colors.green};
      border-right: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    .content {
      border-left: 2px solid ${({ theme }) => theme.colors.green};
      border-right: none;
    }
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
  height: 350px; /* Increased from 300px to 400px */
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(2, 12, 27, 0.6);

  img {
    width: 100%;
    height: 100%;
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

  &.content {
    border-left: 2px solid ${({ theme }) => theme.colors.green};
  }

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

    span.dot {
      color: ${({ theme }) => theme.colors.green};
      margin: 0 6px;
    }
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
      title: 'Black in Tech @ UCI Website',
      description:
        "Launched an official site for UCI's Black in Tech community, promoting events, mentorship, and career opportunities for underrepresented students in tech fields.",
      tech: ['React', 'JavaScript', 'CSS', 'nginx', 'VM Deployment', 'Linux Clustering'],
      image: 'images/bitss.png',
      github: 'https://github.com/alyas-t/BitWebsite',
      external: 'https://bit.ics.uci.edu',
    },
    {
      title: 'AI Sign Language Translator',
      description:
        'Built an AI system that helps bridge communication gaps by translating continuous American Sign Language into English.',
      tech: ['Python', 'PyTorch', 'CNN-LSTM', 'Transformer', 'MediaPipe', 'Machine Learning'],
      image: 'images/signlanguage.png',
      github: null,
      external: 'https://drive.google.com/file/d/1B_vj3rqduHOX2_I6MyspXmFYRmUaPLDL/view',
    },
    {
      title: 'Machine Learning Sudoku Solver',
      description:
        'Created a smart puzzle solver that rapidly solves Sudoku boards of various sizes. Useful for educational demos of backtracking and AI problem-solving showcases in constraint-based environments.',
      tech: ['Python', 'Machine Learning', 'Constraint Satisfaction', 'Algorithm Optimization'],
      image: 'images/sudokuimg.png',
      github: 'https://github.com/stevengorlicki/sudoku-solver',
      external: null,
    },
    {
      title: 'BookTracker',
      description:
        'A personal book management platform designed to help readers track, organize, and discover books more meaningfully. Used to manage reading goals and wishlist titles, as well as search in-app.',
      tech: ['Python', 'Events', 'Google Books API', 'Web Scraping', 'Multithreading'],
      image: 'images/bookappimg.png',
      github: 'https://github.com/stevengorlicki/bookkeeper',
      external: null,
    },
    {
      title: '2048 AI Solver',
      description:
        'Implemented a bot that plays 2048 using expectimax search, evaluating the best possible move in real-time. Great intro to AI decision trees and state evaluation in games.',
      tech: ['Python', 'NumPy', 'Game Theory', 'Expectimax Search'],
      image: 'images/2048img.gif',
      github: null,
      external: null,
    },
    {
      title: 'RougeReef',
      description:
        'My first Unity project — a survival adventure where players explore an island and survive. Helped me learn 3D environments, C#, and memory / object management.',
      tech: ['Unity', 'C#', '3D Modeling', 'Game Design'],
      image: 'images/roguereef.png',
      github: null,
      external: null,
    },
    {
      title: 'Ceresweb',
      description:
        'My first web dev attempt — a site for professors to view student engagement. Learned the basics of layout, and frontend logic. Timekeep project to show my humble beginnings, but kicked off my interest in web design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'images/cereswebimg.png',
      github: null,
      external: 'https://github.com/stevengorlicki/ceresweb',
    },
  ];

  return (
    <ProjectsSection id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Some Projects I've Built
      </motion.h2>

      {featured.map((proj, i) => (
        <ProjectWrapper
          key={i}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
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

          <Content className="content">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="stack">
              {proj.tech.map((t, idx) => (
                <React.Fragment key={idx}>
                  {t}
                  {idx < proj.tech.length - 1 && <span className="dot"> · </span>}
                </React.Fragment>
              ))}
            </div>
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