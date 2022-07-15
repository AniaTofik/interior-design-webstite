import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsletterComponent } from './newsletter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [newsletterComponent],
  providers: [],
  exports: [newsletterComponent],
})
export class NewsletterComponentModule {}
