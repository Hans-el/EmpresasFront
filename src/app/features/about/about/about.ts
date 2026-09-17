import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfo } from '../../../core/models/company-info.model';
import { CompanyInfoService } from '../../../core/services/company-info.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  companyInfo = signal<CompanyInfo | null>(null);
  loading = signal(true);

  constructor(private companyInfoService: CompanyInfoService) {}

  ngOnInit(): void {
    this.companyInfoService.getCompanyInfo().subscribe({
      next: (data) => {
        this.companyInfo.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar información de la empresa', err);
        this.loading.set(false);
      },
    });
  }
}
