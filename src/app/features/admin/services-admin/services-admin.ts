import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService, ServiceRequest } from '../../../core/services/services.service';
import { CompanyService } from '../../../core/models/service.model';

@Component({
  selector: 'app-services-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './services-admin.html',
})
export class ServicesAdmin implements OnInit {
  services = signal<CompanyService[]>([]);
  editingId = signal<number | null>(null);
  showForm = signal(false);

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicesService: ServicesService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      icon: [''],
    });
  }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.servicesService.getAll().subscribe((data) => this.services.set(data));
  }

  openCreateForm(): void {
    this.editingId.set(null);
    this.form.reset();
    this.showForm.set(true);
  }

  openEditForm(service: CompanyService): void {
    this.editingId.set(service.id);
    this.form.setValue({
      name: service.name,
      description: service.description,
      icon: service.icon ?? '',
    });
    this.showForm.set(true);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto = this.form.getRawValue() as ServiceRequest;
    const id = this.editingId();

    const request$ = id ? this.servicesService.update(id, dto) : this.servicesService.create(dto);

    request$.subscribe(() => {
      this.showForm.set(false);
      this.loadServices();
    });
  }

  onDelete(id: number): void {
    if (!confirm('¿Eliminar este servicio?')) return;
    this.servicesService.delete(id).subscribe(() => this.loadServices());
  }

  cancel(): void {
    this.showForm.set(false);
  }
}
