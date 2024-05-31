import { Box, Button, TextField, Typography } from '@mui/material';
import './ConsultTicket.css';
import { useContext, useState } from 'react';
import { RaffleContext } from '../../context/RaffleContext';
import Modal from '../Modal';

const ConsultTicket = () => {
  const { findTicketOwner } = useContext(RaffleContext);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const [ticketOwner, setTicketOwner] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setErrorMessage('');
    setError(false);
  };

  const Consult = (event) => {
    event.preventDefault();
    const inputValueNumber = parseInt(inputValue, 10);

    setError(
      inputValue.trim() === '' || inputValueNumber < 0 || inputValueNumber > 200
    );

    if (inputValue.trim() === '') {
      setErrorMessage('Este campo no puede estar vacío');
      setError(true);
    } else if (inputValueNumber < 0 || inputValueNumber > 200) {
      setErrorMessage('Introduce un número del 0 al 200');
    } else {
      setOpenModal(true);
      setErrorMessage('');
      const search = findTicketOwner(inputValueNumber);
      setTicketOwner(search);
    }
  };

  return (
    <form
      className="ConsultTicket"
      onSubmit={Consult}
    >
      <Typography
        color={'text.primary'}
        textAlign={'center'}
        variant="h5"
      >
        Consultar Ticket
      </Typography>
      <TextField
        type="number"
        label={'Escribe un numero del 0 al 200'}
        value={inputValue}
        onChange={handleChange}
        error={error}
        helperText={errorMessage}
      />
      <Button
        variant="contained"
        className="btn-status"
        type="submit"
      >
        Consultar
      </Button>
      <Modal
        isMobile={false}
        open={openModal}
        close={() => {
          setOpenModal(false);
        }}
        title={'Resultados'}
        children={
          <Box>
            {ticketOwner && ticketOwner.found ? (
              <Typography>
                {`Ticket ${inputValue} Propietario: ${ticketOwner.owner}`}
              </Typography>
            ) : (
              <Typography>
                {`El ticket ${inputValue} aún no ha sido asignado a ningún usuario`}
              </Typography>
            )}
          </Box>
        }
      />
    </form>
  );
};
export default ConsultTicket;
