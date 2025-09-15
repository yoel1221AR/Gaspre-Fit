import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Booking } from 'src/app/models/IBooking';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent {
  @Input() booking: Booking | null = null;
  @Output() close = new EventEmitter<void>();

  isReserved: boolean = false; 

  closeModal(): void {
    this.close.emit(); 
  }

  reserveBooking(): void {
    this.isReserved = true;  
    console.log('Reserva realizada para:', this.booking?.name);
  }
}
