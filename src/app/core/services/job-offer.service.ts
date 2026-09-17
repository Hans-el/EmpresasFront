import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../models/job-offer.model';

@Injectable({ providedIn: 'root' })
export class JobOfferService {
  private readonly apiUrl = 'http://localhost:8080/api/job-offers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.apiUrl);
  }
}
