import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessageRequest } from '../models/contact-message.model';
import { environment } from '../../../environments/environment';

export interface ContactMessage extends ContactMessageRequest {
  id: number;
  read: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly apiUrl = `${environment.apiUrl}/contact-messages`;

  constructor(private http: HttpClient) {}

  send(message: ContactMessageRequest): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(this.apiUrl, message);
  }

  getAll(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(this.apiUrl);
  }

  markAsRead(id: number): Observable<ContactMessage> {
    return this.http.patch<ContactMessage>(`${this.apiUrl}/${id}/read`, {});
  }
}
