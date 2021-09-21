import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: number;
    version: number;
    ticket: {
      id: number;
    };
  };
}
