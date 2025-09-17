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
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreatePromocodeComponent,
    DeletePromocodeComponent,
    ViewPromocodeComponent,
    SigninComponent,
    SignUpComponent
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
