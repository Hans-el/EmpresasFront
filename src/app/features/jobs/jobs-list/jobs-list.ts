import { Component, OnInit, signal } from '@angular/core';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { JobOffer, JobModality } from '../../../core/models/job-offer.model';
import { ApplyModal } from '../apply-modal/apply-modal';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [ApplyModal],
  templateUrl: './jobs-list.html',
})
export class JobsList implements OnInit {
  jobOffers = signal<JobOffer[]>([]);
  loading = signal(true);
  selectedJob = signal<JobOffer | null>(null);

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
  openApplyModal(job: JobOffer): void {
    this.selectedJob.set(job);
  }

  closeApplyModal(): void {
    this.selectedJob.set(null);
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
      PRESENCIAL: 'bg-dark-100 text-blue-700',
    };
    return colors[modality];
  }
}
