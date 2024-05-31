import { createContext, useEffect, useState } from 'react';
import { getData } from '../utils/fireBase';
import {Data, TicketId} from '../interfaces/raffle'



interface RaffleContextProps {
  data : Data | undefined
  checkSoldTicket: (nr:TicketId) => boolean
  loading: boolean
  allTickets: number
  ticketsAvailable: string | number
  findTicketOwner: (nr:TicketId) => {
    found: boolean;
    owner: string;
} | {
    found: boolean;
    owner?: undefined;
}

}

interface RaffleProviderProps {
  children : JSX.Element | JSX.Element []
}

export const RaffleContext = createContext <RaffleContextProps>( {} as RaffleContextProps);

export const RaffleProvider = ({ children }: RaffleProviderProps ) => {


  const [data, setData] = useState <Data> ();
  const [loading, setLoading] = useState(true);
  
  const allTickets = 200;

  const ticketsAvailable = !loading
  ? allTickets - (data?.soldTickets?.length ?? 0)
  : '';


  const checkSoldTicket = (nr:TicketId): boolean => {
    const allTicketsSold  = data?.soldTickets;
    
  if(allTicketsSold){
    const exists = allTicketsSold?.some((ticket) => ticket.ticketId === nr);

    return exists;
  }
  return false

   
  };

  const findTicketOwner = (nr:TicketId)  => {
    const foundOwner = data?.soldTickets.find((ticket) => ticket.ticketId === nr);
    if(foundOwner) {
      return {
        found: true,
        owner: foundOwner.user,
      }
    }else{
      return {
        found: false,
       
      }
    } 
  };

  useEffect(() => {
    async function obtainData() {
      try {
        const response = await getData('raffle-001');
        setData(response);
      } catch (error) {
        console.log('Error' + error);
      } finally {
        setLoading(false);
      }
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
