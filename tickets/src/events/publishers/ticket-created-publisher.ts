import { Publisher, Subjects, TicketCreatedEvent } from "@fytickets/common-v2";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  
}
