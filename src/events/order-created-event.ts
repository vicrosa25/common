import { OrderStatus } from "./types/order-status";
import { Subjects } from "./subjects";

export interface OrderCreateEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: number;
    userId: number;
    status: OrderEstatus;
    expireAt: string;
    ticket: {
      id: number;
      price: number;
    };
  };
}
