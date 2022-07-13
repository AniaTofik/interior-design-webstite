import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { AboutUsComponentModule } from '@about';

@NgModule({
  imports: [
    CommonModule,
    AboutUsComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      },
    ]),
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
