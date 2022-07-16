import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FooterComponent],
  providers: [],
  exports: [FooterComponent],
})
export class FooterComponentModule {}
