import { createContext, useEffect, useState } from 'react';
import { getData } from '../utils/fireBase';

export const RaffleContext = createContext();

export const RaffleProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const allTickets = 200;
  const ticketsAvailable = !loading
    ? allTickets - data?.soldTickets.length
    : '';

  const checkSoldTicket = (nr) => {
    const allNumbersSold = data?.soldTickets;
    if (allNumbersSold) {
      const exists = allNumbersSold.some((ticket) => ticket.number === nr);

      return exists;
    }
  };

  const findTicketOwner = (nr) => {
    if (!loading) {
      const result = data.soldTickets.find((ticket) => ticket.number === nr);

      return result;
    }
  };

  useEffect(() => {
    async function obtainData() {
      const response = await getData('raffle-001');
      setData(response);
      setLoading(false);
    }
    obtainData();
  }, []);
  return (
    <RaffleContext.Provider
      value={{
        data,
        checkSoldTicket,
        loading,
        allTickets,
        ticketsAvailable,
        findTicketOwner,
      }}
    >
      {children}
    </RaffleContext.Provider>
  );
};
