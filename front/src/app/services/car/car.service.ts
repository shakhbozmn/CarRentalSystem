import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Car } from '../../types/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  httpClient: HttpClient = inject(HttpClient);
  private apiUrl = 'https://localhost:7167/api/Cars';
  constructor() {}

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.apiUrl}/${id}`);
  }

  createCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiUrl, car);
  }

  editCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${this.apiUrl}/${car.id}`, car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.apiUrl}/${id}`);
  }
}