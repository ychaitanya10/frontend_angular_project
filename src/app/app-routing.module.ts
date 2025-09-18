import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePromocodeComponent } from './create-promocode/create-promocode.component';
import { DeletePromocodeComponent } from './delete-promocode/delete-promocode.component';
import { ViewPromocodeComponent } from './view-promocode/view-promocode.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ModifyLocationComponent } from './modify-location/modify-location.component';
import { DeleteLocationComponent } from './delete-location/delete-location.component';
import { ViewLocationComponent } from './view-location/view-location.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { ViewSpeakerComponent } from './view-speaker/view-speaker.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewTopicsComponent } from './view-topics/view-topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { ModifyTopicComponent } from './modify-topic/modify-topic.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ModifyEventComponent } from './modify-event/modify-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  { path: 'create-promocode', component: CreatePromocodeComponent },
  { path: 'delete-promocode', component: DeletePromocodeComponent },
  { path: 'view-promocode', component: ViewPromocodeComponent },
  { path: 'add-location', component: AddLocationComponent },
  { path: 'modify-location', component: ModifyLocationComponent },
  { path: 'delete-location', component: DeleteLocationComponent },
  { path: 'view-location', component: ViewLocationComponent },
  { path: 'add-speaker', component:AddSpeakerComponent },
  { path: 'view-speaker', component:ViewSpeakerComponent },
  { path: 'add-admin',component:AddAdminComponent },
  {path:'view-admin',component:ViewAdminComponent},
  {path:'view-topics',component:ViewTopicsComponent},
  {path:'add-topic',component:AddTopicComponent},
  {path:'modify-topic',component:ModifyTopicComponent},
  {path:'view-event',component:ViewEventComponent},
  {path:'add-event',component:AddEventComponent},
  {path:'modify-event',component:ModifyEventComponent},
  {path:'delete-event',component:DeleteEventComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent}


  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
