import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePromocodeComponent } from './create-promocode/create-promocode.component';
import { DeletePromocodeComponent } from './delete-promocode/delete-promocode.component';
import { ViewPromocodeComponent } from './view-promocode/view-promocode.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'create-promocode', component: CreatePromocodeComponent },
  { path: 'delete-promocode', component: DeletePromocodeComponent },
  { path: 'view-promocode', component: ViewPromocodeComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
