import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { JobOfferService, JobOfferRequest } from '../../../core/services/job-offer.service';
import { JobOffer } from '../../../core/models/job-offer.model';

@Component({
  selector: 'app-jobs-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './jobs-admin.html',
})
export class JobsAdmin implements OnInit {
  private readonly fb = inject(FormBuilder);

  jobOffers = signal<JobOffer[]>([]);
  editingId = signal<number | null>(null);
  showForm = signal(false);
  saving = signal(false);

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    location: ['', Validators.required],
    modality: ['REMOTO', Validators.required],
  });

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobOfferService.getAll().subscribe((data) => this.jobOffers.set(data));
  }

  openCreateForm(): void {
    this.editingId.set(null);
    this.form.reset({ modality: 'REMOTO' });
    this.showForm.set(true);
  }

  openEditForm(job: JobOffer): void {
    this.editingId.set(job.id);
    this.form.setValue({
      title: job.title,
      description: job.description,
      location: job.location,
      modality: job.modality,
    });
    this.showForm.set(true);
  }

  onSubmit(): void {
    if (this.form.invalid || this.saving()) return;
    this.saving.set(true);
    const dto = this.form.getRawValue() as JobOfferRequest;
    const id = this.editingId();

    const request$ = id ? this.jobOfferService.update(id, dto) : this.jobOfferService.create(dto);

    request$.subscribe({
      next: () => {
        this.saving.set(false);
        this.showForm.set(false);
        this.loadJobs();
      },
      error: () => this.saving.set(false),
    });
  }

  onDelete(id: number): void {
    if (!confirm('¿Eliminar esta oferta de empleo?')) return;
    this.jobOfferService.delete(id).subscribe(() => this.loadJobs());
  }

  cancel(): void {
    this.showForm.set(false);
  }
}
