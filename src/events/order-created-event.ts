import { OrderStatus } from "./types/order-status";
import { Subjects } from "./subjects";


interface Product {
  id: number;
  price: number;
}

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: number;
    version: number;
    userId: number;
    status: OrderStatus;
    expireAt: string;
    products: Product[];
  };
}
