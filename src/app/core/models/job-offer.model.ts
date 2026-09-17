export type JobModality = 'REMOTO' | 'HIBRIDO' | 'PRESENCIAL';

export interface JobOffer {
  id: number;
  title: string;
  description: string;
  location: string;
  modality: JobModality;
  publishedAt: string;
}
