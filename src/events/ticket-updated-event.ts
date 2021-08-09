import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: number;
    title: string;
    price: number;
    userId: number;
  };
}
