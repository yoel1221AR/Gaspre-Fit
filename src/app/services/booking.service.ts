import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/IBooking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingsUrl = 'assets/bookings.json'; 

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl);
  }
}
