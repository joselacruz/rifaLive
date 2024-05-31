import { useRef, useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import RaffleStatus from './components/RaffleStatus';
import RaffleVideo from './components/RaffleVideo';
import { createTheme } from '@mui/material/styles';
import RaffleDetails from './components/RaffleDetails';
import Layout from './components/Layout';
import Header from './components/Header';
import { RaffleProvider } from './context/RaffleContext';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#9c27b0',
      },
    },
  });
  const sectionLive = useRef <HTMLDivElement> (null);
  const scrollToSection = () => {
    if (sectionLive.current) {
      sectionLive.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <RaffleProvider>
          <Header />
          <Layout>
            <RaffleDetails navigateTo={scrollToSection} />
            <RaffleStatus />
            <RaffleVideo sectionRef={sectionLive} />
          </Layout>
        </RaffleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
