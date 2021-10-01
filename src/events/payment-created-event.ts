import { Subjects } from "./subjects";

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: number;
    orderId: number;
    stripeId: string;
  };
}
