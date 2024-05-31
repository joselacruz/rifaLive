
export interface Ticket {
  ticketId: TicketId;
    user: string;
  }

  
  export interface Data {
    soldTickets: Ticket[];
    video?: 'string'
  }

  export type TicketId = number;
