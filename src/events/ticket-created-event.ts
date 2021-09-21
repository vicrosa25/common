import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: number;
    version: number;
    title: string;
    price: number;
    userId: number;
  };
}
