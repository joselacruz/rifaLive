import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useContext, useState } from 'react';
import Modal from '../Modal';
import Table from '../Table';
import { RaffleContext } from '../../context/RaffleContext';

const RaffleDetails = ({ navigateTo }) => {
  const { loading, data, allTickets, ticketsAvailable } =
    useContext(RaffleContext);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Typography
        variant="h5"
        textAlign={'center'}
        color={'text.primary'}
      >
        "¡Estamos sorteando un Xiaomi Redmi Note 11 Lite!"
      </Typography>
      <Box
        width={'300px'}
        height={'320px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <img
          src="/src/assets/premio.png"
          alt="Foto del Premio de la Rifa"
        />
      </Box>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: 'red'[500] }}
              aria-label="recipe"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbtPSXtC8qTGK4ZMkmGincqfk0wH5gFJwc0gnp2C9pRjkm5Mb920H4wag6SF7EnzPKBo&usqp=CAU"
            ></Avatar>
          }
          title={'Suset Verza'}
        ></CardHeader>
        <CardContent>
          <Typography variant="body1">
            Apoya a Suset Verza en su valiente lucha contra el cáncer de seno.
          </Typography>

          <Typography
            variant="body2"
            style={{ marginTop: '10px' }}
          >
            <b>Tickets Disponibles:</b>
            {!loading ? `${ticketsAvailable} de ${allTickets}` : ' . . . '}
          </Typography>

          <Typography
            variant="body2"
            gutterBottom={true}
          >
            <b>Precio del Ticket:</b> $2
          </Typography>

          <Typography
            variant="body2"
            color={'text.disabled'}
          >
            La rifa iniciará al vender todos los tickets.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Compar Ticket
          </Button>
          <Button onClick={navigateTo}>Ir al Sorteo en Vivo</Button>
        </CardActions>
      </Card>

      <Modal
        open={openModal}
        close={handleClose}
        title={'Selecciona un Numero'}
        children={<Table actionsActive={true} />}
      />
    </>
  );
};

export default RaffleDetails;
