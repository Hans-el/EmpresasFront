import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application, ApplicationRequest } from '../models/application.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private readonly apiUrl = `${environment.apiUrl}/applications`;

  constructor(private http: HttpClient) {}

  create(dto: ApplicationRequest): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, dto);
  }

  getByJobOffer(jobOfferId: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/job-offer/${jobOfferId}`);
  }
}
