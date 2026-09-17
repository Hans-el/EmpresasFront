import { Component, OnInit, signal } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { CompanyService } from '../../../core/models/service.model';
import { ServicesService } from '../../../core/services/services.service';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-list.html',
})
export class ServicesList implements OnInit {
  services = signal<CompanyService[]>([]);
  loading = signal(true);

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.servicesService.getAll().subscribe({
      next: (data) => {
        this.services.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
