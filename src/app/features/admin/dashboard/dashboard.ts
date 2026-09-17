import { Component, signal } from '@angular/core';
import { ServicesAdmin } from '../services-admin/services-admin';
import { JobsAdmin } from '../jobs-admin/jobs-admin';
import { MessagesAdmin } from '../messages-admin/messages-admin';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

type Tab = 'services' | 'jobs' | 'messages';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServicesAdmin, JobsAdmin, MessagesAdmin],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  activeTab = signal<Tab>('services');

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }
}
