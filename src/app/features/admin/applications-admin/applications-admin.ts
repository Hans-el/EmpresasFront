import { Component, OnInit, signal } from '@angular/core';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { ApplicationService } from '../../../core/services/application.service';
import { JobOffer } from '../../../core/models/job-offer.model';
import { Application } from '../../../core/models/application.model';

@Component({
  selector: 'app-applications-admin',
  standalone: true,
  imports: [],
  templateUrl: './applications-admin.html',
})
export class ApplicationsAdmin implements OnInit {
  jobOffers = signal<JobOffer[]>([]);
  selectedJobOfferId = signal<number | null>(null);
  applications = signal<Application[]>([]);
  loading = signal(false);

  constructor(
    private jobOfferService: JobOfferService,
    private applicationService: ApplicationService,
  ) {}

  ngOnInit(): void {
    this.jobOfferService.getAll().subscribe((data) => this.jobOffers.set(data));
  }

  onSelectJobOffer(event: Event): void {
    const id = Number((event.target as HTMLSelectElement).value);

    if (!id) {
      this.selectedJobOfferId.set(null);
      this.applications.set([]);
      return;
    }

    this.selectedJobOfferId.set(id);
    this.loading.set(true);

    this.applicationService.getByJobOffer(id).subscribe({
      next: (data) => {
        this.applications.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
