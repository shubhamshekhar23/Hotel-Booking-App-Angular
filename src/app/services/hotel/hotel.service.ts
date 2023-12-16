import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, of } from 'rxjs';
import { HotelApiResponse, Hotel } from 'src/app/models/hotel.model';
import hotelApiResponseMockData from 'src/app/mockdata/hotels.mockdata';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  _hotels: Hotel[] = [];
  selectedHotelIndex: number = 0;
  hotelDataFetched = new Subject();
  hotelSelectedByCard = new Subject();
  constructor(private _httpClient: HttpClient) {}

  get hotels() {
    return this._hotels;
  }

  set hotels(val) {
    this._hotels = val;
    this.hotelDataFetched.next(this._hotels);
  }

  getHotelsNearLocation() {
    return of(hotelApiResponseMockData).pipe(
      delay(1000), // Introduce a delay of 1000ms
    );
    return this._httpClient.get<HotelApiResponse>(
      `/hotels`,
    ) as Observable<HotelApiResponse>;
  }

  listenToHotelDataFetched() {
    return this.hotelDataFetched.asObservable();
  }

  listenToHotelSelection() {
    return this.hotelSelectedByCard.asObservable();
  }
}
