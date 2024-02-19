import { useContext, useState } from 'react';
import { RaffleContext } from '../../context/RaffleContext';
import { buyTicket } from '../../utils/buyTicket';
import './Table.css';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import Modal from '../Modal';

const Table = ({ actionsActive = false }) => {
  const [selectedTicket, setSelectedTicket] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const tickets = Array.from({ length: 201 }, (_, index) => index);
  const { checkSoldTicket, loading } = useContext(RaffleContext);

  const actionsTicket = (e) => {
    const ticketAvailable = !e.target.classList.contains('ticket-used');
    const ticketNumber = e.target.textContent;
    setSelectedTicket(ticketNumber);

    if (ticketAvailable) {
      setOpenModal(true);
    } else alert(`El ticket numero ${ticketNumber} no esta disponible`);
  };

  function handleBuy(ticketNumber) {
    buyTicket({
      tlf: '584149525949',
      mensajeCodificado: `hola quiero comprar el ticket numero ${ticketNumber}`,
    });
    setOpenModal(false);
  }
  return (
    <div className="table">
      {tickets.map((number) =>
        !loading ? (
          <p
            key={number}
            className={`ticket-item ${
              checkSoldTicket(number) ? 'ticket-used' : ''
            }`}
            onClick={(e) => {
              if (actionsActive) {
                actionsTicket(e);
              }
            }}
          >
            {number}
          </p>
        ) : (
          <Skeleton
            key={number + 1}
            variant="rectangular"
            width={57}
            height={28}
          />
        )
      )}
      <Modal
        open={openModal}
        close={handleClose}
        isMobile={false}
        title={'Confirmación'}
        children={
          <Box>
            <Typography gutterBottom>
              Quieres comprar el numero {selectedTicket}
            </Typography>
            <Box
              display={'flex'}
              gap={'20px'}
            >
              <Button
                variant="contained"
                onClick={() => {
                  handleBuy(selectedTicket);
                  handleClose();
                }}
              >
                Si
              </Button>
              <Button onClick={handleClose}>No</Button>
            </Box>
          </Box>
        }
      />
    </div>
  );
};
export default Table;
