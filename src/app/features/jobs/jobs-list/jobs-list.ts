import { Component, OnInit, signal } from '@angular/core';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { JobOffer, JobModality } from '../../../core/models/job-offer.model';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [],
  templateUrl: './jobs-list.html',
})
export class JobsList implements OnInit {
  jobOffers = signal<JobOffer[]>([]);
  loading = signal(true);

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService.getAll().subscribe({
      next: (data) => {
        this.jobOffers.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  modalityLabel(modality: JobModality): string {
    const labels: Record<JobModality, string> = {
      REMOTO: 'Remoto',
      HIBRIDO: 'Híbrido',
      PRESENCIAL: 'Presencial',
    };
    return labels[modality];
  }

  modalityColor(modality: JobModality): string {
    const colors: Record<JobModality, string> = {
      REMOTO: 'bg-green-100 text-green-700',
      HIBRIDO: 'bg-yellow-100 text-yellow-700',
      PRESENCIAL: 'bg-blue-100 text-blue-700',
    };
    return colors[modality];
  }
}
