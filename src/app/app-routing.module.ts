import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ANDROIDComponent } from './android/android.component';
import { DialogComponent } from './android/dialog/dialog.component';

import { FirebaseAuthComponent } from './android/firebase-auth/firebase-auth.component';
import { FirestoreDatabaseComponent } from './android/firestore-database/firestore-database.component';
import { FirestoreRecycleComponent } from './android/firestore-recycle/firestore-recycle.component';
import { ProgresDialogComponent } from './android/progres-dialog/progres-dialog.component';

import { SqliteAuthComponent } from './android/sqlite-auth/sqlite-auth.component';
import { SqliteComponent } from './android/sqlite/sqlite.component';
import { WebServicesAuthComponent } from './android/web-services-auth/web-services-auth.component';
import { WebServicesRecycleComponent } from './android/web-services-recycle/web-services-recycle.component';
import { WebSevicesComponent } from './android/web-sevices/web-sevices.component';
import { HomeComponent } from './home/home.component';
import { JSComponent } from './js/js.component';
import { LoginComponent } from './login/login.component';
import { PHPComponent } from './php/php.component';
import { SqliteRecycleComponent } from './sqlite-recycle/sqlite-recycle.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"Js",component:JSComponent},
  {path:"Php",component:PHPComponent},

  {path:"Android",component:ANDROIDComponent},
//
  {path:"Android/Firebase-Auth",component:FirebaseAuthComponent},
  {path:"Android/Firebase-FireStore",component:FirestoreDatabaseComponent},
  {path:"Android/Firebase-Recycle",component:FirestoreRecycleComponent},
//
  {path:"Android/Sqlite",component:SqliteComponent},
  {path:"Android/Sqlite-Auth",component:SqliteAuthComponent},
  {path:"Android/Sqlite-Recycle",component:SqliteRecycleComponent},
//
  {path:"Android/WebService",component:WebSevicesComponent},
  {path:"Android/WebService-Auth",component:WebServicesAuthComponent},
  {path:"Android/WebService-Recycle",component:WebServicesRecycleComponent},
//
  {path:"Android/Dialog",component:DialogComponent},
  {path:"Android/ProgresDialog",component:ProgresDialogComponent}

  
//
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
