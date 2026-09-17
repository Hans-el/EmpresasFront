import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessageRequest } from '../models/contact-message.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly apiUrl = 'http://localhost:8080/api/contact-messages';

  constructor(private http: HttpClient) {}

  send(message: ContactMessageRequest): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
}
