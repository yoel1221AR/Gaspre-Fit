import { Component } from '@angular/core';
import { Booking } from './models/IBooking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedBooking: Booking | null = null;

  onBookingSelected(booking: Booking): void {
    this.selectedBooking = booking;  // Establecer la reserva seleccionada
  }

  closeModal(): void {
    this.selectedBooking = null;  // Cerrar el modal
  }
}
