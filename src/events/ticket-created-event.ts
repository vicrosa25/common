import { Subjects } from "./subjects";

interface Photo {
  cloudId: string;
  url: string;
  secureUrl: string;
}

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: number;
    version: number;
    title: string;
    price: number;
    userId: number;
    description: string;
    photos: Photo[];
  };
}
