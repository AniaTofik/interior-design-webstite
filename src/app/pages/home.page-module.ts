import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule } from '@home';
import { NavbarComponentModule } from '../../../projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';
import { AboutUsComponentModule } from '@about';
import { OfferComponentModule } from '@offer';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentModule,
    AboutUsComponentModule,
    OfferComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    NavbarComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
