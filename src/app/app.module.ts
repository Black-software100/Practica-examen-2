import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PHPComponent } from './php/php.component';
import { JSComponent } from './js/js.component';
import { ANDROIDComponent } from './android/android.component';
import { FirestoreComponent } from './android/firestore/firestore.component';
import { SqliteComponent } from './android/sqlite/sqlite.component';
import { ServicesComponent } from './android/services/services.component';
import { FirestoreDatabaseComponent } from './android/firestore-database/firestore-database.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PHPComponent,
    JSComponent,
    ANDROIDComponent,
    FirestoreComponent,
    SqliteComponent,
    ServicesComponent,
    FirestoreDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
