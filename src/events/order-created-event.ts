import { OrderStatus } from "./types/order-status";
import { Subjects } from "./subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: number;
    version: number;
    userId: number;
    status: OrderStatus;
    expireAt: string;
    ticket: {
      id: number;
      price: number;
    };
  };
}
