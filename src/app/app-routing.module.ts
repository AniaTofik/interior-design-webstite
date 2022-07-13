import { AboutUsComponentModule } from '@about';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentModule } from '@home';
import { NavbarComponentModule } from '@navigation';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageModule,
    HomeComponentModule,
    NavbarComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
