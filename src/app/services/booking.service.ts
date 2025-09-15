import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from 'src/app/models/IBooking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: Booking[] = [
    { id: 1, name: 'Yoga', teacher: 'Laura', slots: 10, description: 'Clase de yoga', date: new Date(), imageUrl: 'url-to-image' },
    { id: 2, name: 'Crossfit', teacher: 'Juan', slots: 8, description: 'Clase de crossfit', date: new Date(), imageUrl: 'url-to-image' },
    { id: 3, name: 'Spinning', teacher: 'María', slots: 12, description: 'Clase de spinning', date: new Date(), imageUrl: 'url-to-image' }
  ];

  getBookings(): Observable<Booking[]> {
    return of(this.bookings);  // Retorna los datos como un Observable
  }
}
