import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer, JobModality } from '../models/job-offer.model';
import { environment } from '../../../environments/environment';

export interface JobOfferRequest {
  title: string;
  description: string;
  location: string;
  modality: JobModality;
}

@Injectable({ providedIn: 'root' })
export class JobOfferService {
  private readonly apiUrl = `${environment.apiUrl}/job-offers`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.apiUrl);
  }

  create(dto: JobOfferRequest): Observable<JobOffer> {
    return this.http.post<JobOffer>(this.apiUrl, dto);
  }

  update(id: number, dto: JobOfferRequest): Observable<JobOffer> {
    return this.http.put<JobOffer>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
