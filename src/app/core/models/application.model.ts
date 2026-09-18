export interface ApplicationRequest {
  jobOfferId: number;
  applicantName: string;
  applicantEmail: string;
  resumeUrl: string;
}

export interface Application {
  id: number;
  jobOfferId: number;
  jobOfferTitle: string;
  applicantName: string;
  applicantEmail: string;
  resumeUrl: string;
  appliedAt: string;
}
