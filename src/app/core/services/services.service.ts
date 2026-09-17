import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyService } from '../models/service.model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private readonly apiUrl = 'http://localhost:8080/api/services';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CompanyService[]> {
    return this.http.get<CompanyService[]>(this.apiUrl);
  }
}
