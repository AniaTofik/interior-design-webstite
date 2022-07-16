import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NewsletterComponent],
  providers: [],
  exports: [NewsletterComponent],
})
export class NewsletterComponentModule {}
