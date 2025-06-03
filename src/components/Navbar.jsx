import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 50px;
  width: 100%;
  height: 100px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.colors.green};
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transform: translateZ(0);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.colors.green};
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    margin: 0 5px;
    position: relative;
    font-size: 13px;

    a {
      display: inline-flex;         // ✅ keeps <span> and text inline
      align-items: center;
      gap: 6px;                     // ✅ clean space between number and label
      padding: 10px;
      color: ${({ theme }) => theme.colors.lightSlate};
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      font-family: ${({ theme }) => theme.fonts.mono};
    
      &:hover {
        color: ${({ theme }) => theme.colors.green};
      }
    
      span {
        color: ${({ theme }) => theme.colors.green};
        font-size: 12px;
        margin: 0;                 // ✅ reset any default spacing
      }
    }

  }

  @media (max-width: 768px) {
    li {
      margin: 0 2px;
      font-size: 12px;
    }
  }
`;

const ResumeButton = styled.a`
  margin-left: 15px;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.colors.green};
  }

  &:active {
    transform: translate(-1px, -1px);
    box-shadow: 1px 1px 0 0 ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 768px) {
    margin-left: 10px;
    padding: 8px 12px;
    font-size: 12px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">S</Logo>
      <NavLinks>
        <li><a href="#hero"><span>01.</span>About</a></li>
        <li><a href="#education"><span>02.</span>Education</a></li>
        <li><a href="#experience"><span>03.</span>Experience</a></li>
        <li><a href="#projects"><span>04.</span>Projects</a></li>
        <li><a href="#contact"><span>05.</span>Contact</a></li>
        <li><ResumeButton href="/StevenGorlickiResume.pdf" target="_blank" rel="noopener noreferrer">Resume</ResumeButton></li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
