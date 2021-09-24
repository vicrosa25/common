import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: number;
    version: number;
    title: string;
    price: number;
    userId: number;
    orderId: number | undefined;
  };
}
