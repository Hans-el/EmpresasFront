import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApplicationService } from '../../../core/services/application.service';

@Component({
  selector: 'app-apply-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apply-modal.html',
})
export class ApplyModal {
  @Input({ required: true }) jobOfferId!: number;
  @Input({ required: true }) jobTitle!: string;
  @Output() closed = new EventEmitter<void>();

  submitted = signal(false);
  saving = signal(false);
  error = signal<string | null>(null);

  private fb = inject(FormBuilder);

  form = this.fb.group({
    applicantName: ['', Validators.required],
    applicantEmail: ['', [Validators.required, Validators.email]],
    resumeUrl: ['', Validators.required],
  });

  constructor(
    private applicationService: ApplicationService,
  ) {}

  onSubmit(): void {
    if (this.form.invalid || this.saving()) return;

    this.saving.set(true);
    this.error.set(null);

    const dto = {
      jobOfferId: this.jobOfferId,
      ...this.form.getRawValue(),
    } as any;

    this.applicationService.create(dto).subscribe({
      next: () => {
        this.saving.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.saving.set(false);
        this.error.set('No se pudo enviar la postulación. Intenta de nuevo.');
      },
    });
  }

  close(): void {
    this.closed.emit();
  }
}
