import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyService } from '../models/service.model';
import { environment } from '../../../environments/environment';

export interface ServiceRequest {
  name: string;
  description: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private readonly apiUrl = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CompanyService[]> {
    return this.http.get<CompanyService[]>(this.apiUrl);
  }

  create(dto: ServiceRequest): Observable<CompanyService> {
    return this.http.post<CompanyService>(this.apiUrl, dto);
  }

  update(id: number, dto: ServiceRequest): Observable<CompanyService> {
    return this.http.put<CompanyService>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
