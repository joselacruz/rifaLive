import { Typography } from '@mui/material';
import './RaffleStatus.css';
import Table from '../Table';
import ConsultTicket from '../ConsultTicket';

const RaffleStatus = () => {
  return (
    <div className="RaffleStatus">
      <Typography
        variant={'h5'}
        color={'text.primary'}
        textAlign={'center'}
        gutterBottom
      >
        Tickets
      </Typography>
      <Typography
        color={'text.primary'}
        variant="body2"
        gutterBottom
        className="RaffleStatus-indicator"
      >
        Disponibles
        <span className="indicator indicator--available"></span>
      </Typography>
      <Typography
        color={'text.primary'}
        variant="body2"
        gutterBottom
        className="RaffleStatus-indicator"
      >
        Vendidos
        <span className="indicator indicator--notAvailable"></span>
      </Typography>
      <Table actionsActive={true} />
      <ConsultTicket />
    </div>
  );
};
export default RaffleStatus;
