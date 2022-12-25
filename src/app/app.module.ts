import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LendingListComponent } from './lending-list/lending-list.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HeaderComponent } from './core/components/header/header.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LendingListComponent,
    NotFoundComponent,
    HeaderComponent,
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
