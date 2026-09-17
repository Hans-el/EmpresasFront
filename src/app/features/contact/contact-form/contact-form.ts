import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  submitted = signal(false);
  error = signal(false);
  form;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.contactService.send(this.form.getRawValue() as any).subscribe({
      next: () => {
        this.submitted.set(true);
        this.form.reset();
      },
      error: () => this.error.set(true),
    });
  }
}
