import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/IBooking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];
  @Output() bookingSelected = new EventEmitter<Booking>();  // Emitir el evento con la reserva seleccionada

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((data: Booking[]) => {
      this.bookings = data;
    });
  }

  openModal(id: number): void {
    const selectedBooking = this.bookings.find(booking => booking.id === id);
    if (selectedBooking) {
      console.log('Modal abierto con la reserva:', selectedBooking);
      this.bookingSelected.emit(selectedBooking);  // Emitir el evento con la reserva
    }
  }
}
