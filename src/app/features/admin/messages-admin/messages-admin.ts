import { Component, OnInit, signal } from '@angular/core';
import { ContactService, ContactMessage } from '../../../core/services/contact.service';

@Component({
  selector: 'app-messages-admin',
  standalone: true,
  imports: [],
  templateUrl: './messages-admin.html',
})
export class MessagesAdmin implements OnInit {
  messages = signal<ContactMessage[]>([]);

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.contactService.getAll().subscribe((data) => this.messages.set(data));
  }

  markAsRead(id: number): void {
    this.contactService.markAsRead(id).subscribe(() => this.loadMessages());
  }
}
