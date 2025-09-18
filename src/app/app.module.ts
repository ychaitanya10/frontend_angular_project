import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreatePromocodeComponent } from './create-promocode/create-promocode.component';
import { DeletePromocodeComponent } from './delete-promocode/delete-promocode.component';
import { ViewPromocodeComponent } from './view-promocode/view-promocode.component';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreatePromocodeComponent,
    DeletePromocodeComponent,
    ViewPromocodeComponent,
    AddLocationComponent,
    ModifyLocationComponent,
    DeleteLocationComponent,
    ViewLocationComponent,
    AddSpeakerComponent,
    ViewSpeakerComponent,
    AddAdminComponent,
    ViewAdminComponent,
    ViewTopicsComponent,
    AddTopicComponent,
    ModifyTopicComponent,
    ViewEventComponent,
    AddEventComponent,
    ModifyEventComponent,
    DeleteEventComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
