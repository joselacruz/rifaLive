import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { RefObject, useContext} from 'react';
import VideoLock from '../VideoLock';
import { RaffleContext } from '../../context/RaffleContext';

interface RaffleVideoProps {
  sectionRef: RefObject<HTMLDivElement>;
}


const RaffleVideo = ({ sectionRef }: RaffleVideoProps) => {
  const theme = useTheme();
  const warningColor = theme.palette.warning.main;
  const { ticketsAvailable, data} = useContext(RaffleContext);

  return (
    <Container
      ref={sectionRef}
      className="video"
      maxWidth="sm"
      sx={{ paddingBlockStart: '48px', width: '100%' }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        color="text.primary"
      >
        Sorteo en Vivo
      </Typography>

      {!data?.video && (
       <>
 <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5px',
            marginBlockStart: '20px',
            marginBlockEnd: '20px',
          }}
        >
          <Typography color={warningColor}>RESTAN</Typography>
          <Typography
            sx={{
              padding: '10px',
              backgroundColor: '#b30101',
              color: 'white',
              borderRadius: '4px',
              fontWeight: 'bold',
              boxShadow: '0px 2px 5px black',
            }}
          >
            {ticketsAvailable}
          </Typography>
          <Typography color={warningColor}>
            TICKETS PARA INICIAR EL SORTEO
          </Typography>
        </Box>
        <VideoLock />
       </>
      )}
      {data?.video && (
        <iframe
          width="100%"
          height="315"
          src={data.video}
          frameBorder="0"
          allowFullScreen
        />
      )}

      {/* {!data?.video && <VideoLock />} */}
    </Container>
  );
};
export default RaffleVideo;
