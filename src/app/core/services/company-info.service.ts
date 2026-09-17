import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyInfo } from '../models/company-info.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyInfoService {
  private readonly apiUrl = `${environment.apiUrl}/company-info`;

  constructor(private http: HttpClient) {}

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(this.apiUrl);
  }
}
