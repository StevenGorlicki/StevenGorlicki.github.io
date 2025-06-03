import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceSection = styled.section`
  max-width: 1100px;
  padding: 100px 0;
  margin: 0 auto;

  h2 {
    font-size: clamp(26px, 5vw, 32px);
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-weight: 600;
    margin-bottom: 40px;

    &::before {
      content: '03.';
      margin-right: 10px;
      color: ${({ theme }) => theme.colors.green};
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 20px;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 200px;

  li {
    padding: 14px 18px;
    color: ${({ theme }) => theme.colors.slate};
    font-family: ${({ theme }) => theme.fonts.mono};
    cursor: pointer;
    border-left: 2px solid transparent;
    transition: all 0.3s ease;

    &.active {
      color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.lightNavy};
      border-left: 2px solid ${({ theme }) => theme.colors.green};
    }

    &:hover:not(.active) {
      background-color: rgba(100, 255, 218, 0.05);
    }
  }
`;

const TabPanel = styled.div`
  flex: 1;
  padding-left: 50px;
  display: flex;
  gap: 60px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  gap: 60px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

const TextContent = styled.div`
  flex: 2;

  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.lightSlate};
  }

  span {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.slate};
  }

  ul {
    margin-top: 20px;
    padding-left: 0;

    li {
      margin-bottom: 12px;
      color: ${({ theme }) => theme.colors.lightSlate};
      list-style: none;
      position: relative;
      padding-left: 24px;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
        font-family: ${({ theme }) => theme.fonts.mono};
      }
    }
  }
`;

const StyledImage = styled(motion.img)`
  flex: 1;
  width: 100%;
  max-width: 450px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  box-shadow: 0 12px 30px rgba(2, 12, 27, 0.6);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.green};
    transform: translate(-3px, -3px);
  }

  &:active {
    transform: translate(-1px, -1px);
    box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.green};
  }
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'iD Tech',
      role: 'CS & Robotics Instructor',
      time: 'Summer 2025',
      bullets: [
        'Teaching middle school students programming, robotics, and game design.',
        'Focused on project-based and hands-on learning experiences.',
      ],
      image: '/images/IDTechImg.jpg',
      link: 'https://www.idtech.com/summer-camps'
    },
    {
      company: 'UCI Health',
      role: 'Game Developer / Researcher',
      time: 'Jan 2025 – June 2025',
      bullets: [
        'Developed interactive minigames to replace math-based tasks in research.',
        'Standardized reusable Unity architecture and prefab system.',
        'Contributed to published studies & app releases on iOS and Android.',
      ],
      image: '/images/secondtry.webp',
      link: 'https://sleepinpediatrics.com/our-team'
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 },
  };

  return (
    <ExperienceSection id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Where I've Worked
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Tabs>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TabList>
              {experiences.map((exp, i) => (
                <li
                  key={i}
                  className={i === activeTab ? 'active' : ''}
                  onClick={() => setActiveTab(i)}
                >
                  {exp.company}
                </li>
              ))}
            </TabList>
          </motion.div>

          <TabPanel>
            <AnimatePresence mode="wait" custom={activeTab}>
              <ContentWrapper
                key={activeTab}
                custom={activeTab}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <TextContent>
                  <h3>
                    {experiences[activeTab].role}{' '}
                    <span>@ {experiences[activeTab].company}</span>
                  </h3>

                  <span>
                    {experiences[activeTab].time}
                  </span>

                  <ul>
                    {experiences[activeTab].bullets.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {experiences[activeTab].link && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <ViewButton
                        href={experiences[activeTab].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check it out
                      </ViewButton>
                    </motion.div>
                  )}
                </TextContent>

                <StyledImage
                  src={experiences[activeTab].image}
                  alt={`${experiences[activeTab].company} visual`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />
              </ContentWrapper>
            </AnimatePresence>
          </TabPanel>
        </Tabs>
      </motion.div>
    </ExperienceSection>
  );
};

export default Experience;