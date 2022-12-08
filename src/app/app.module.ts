import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PHPComponent } from './php/php.component';
import { JSComponent } from './js/js.component';
import { ANDROIDComponent } from './android/android.component';
import { SqliteComponent } from './android/sqlite/sqlite.component';
import { FirestoreDatabaseComponent } from './android/firestore-database/firestore-database.component';
import { WebSevicesComponent } from './android/web-sevices/web-sevices.component';
import { FirebaseAuthComponent } from './android/firebase-auth/firebase-auth.component';
import { SqliteAuthComponent } from './android/sqlite-auth/sqlite-auth.component';
import { WebServicesAuthComponent } from './android/web-services-auth/web-services-auth.component';
import { WebServicesRecycleComponent } from './android/web-services-recycle/web-services-recycle.component';
import { WebSqliteRecycleComponent } from './android/web-sqlite-recycle/web-sqlite-recycle.component';
import { FirestoreRecycleComponent } from './android/firestore-recycle/firestore-recycle.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PHPComponent,
    JSComponent,
    ANDROIDComponent,
    SqliteComponent,
    FirestoreDatabaseComponent,
    WebSevicesComponent,
    FirebaseAuthComponent,
    SqliteAuthComponent,
    WebServicesAuthComponent,
    WebServicesRecycleComponent,
    WebSqliteRecycleComponent,
    FirestoreRecycleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
