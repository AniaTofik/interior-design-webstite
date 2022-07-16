import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterDTO } from './newsletter.dto';

export const ADDS_NEWSLETTER_DTO = new InjectionToken<AddsNewsletterDtoPort>('ADDS_NEWSLETTER_DTO');

export interface AddsNewsletterDtoPort {
  add(newsletterDTO: Partial<NewsletterDTO>): Observable<void>;
}
