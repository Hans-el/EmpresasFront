import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CompanyInfoService } from '../../../core/services/company-info.service';
import { CompanyInfo } from '../../../core/models/company-info.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  companyInfo = signal<CompanyInfo | null>(null);
  mapUrl = signal<SafeResourceUrl | null>(null);

  constructor(
    private companyInfoService: CompanyInfoService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.companyInfoService.getCompanyInfo().subscribe({
      next: (data) => {
        this.companyInfo.set(data);
        this.buildMapUrl(data);
      },
    });
  }

  private buildMapUrl(info: CompanyInfo): void {
    if (!info.latitude || !info.longitude) return;
    const url = `https://www.google.com/maps?q=${info.latitude},${info.longitude}&output=embed`;
    this.mapUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }
}
