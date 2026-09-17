import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyInfo } from '../models/company-info.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyInfoService {
  private readonly apiUrl = 'http://localhost:8080/api/company-info';

  constructor(private http: HttpClient) {}

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(this.apiUrl);
  }
}
