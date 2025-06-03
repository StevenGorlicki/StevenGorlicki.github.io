import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
      </main>
    </ThemeProvider>
  );
}

export default App;
