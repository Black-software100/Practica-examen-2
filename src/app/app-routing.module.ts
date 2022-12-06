import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ANDROIDComponent } from './android/android.component';
import { HomeComponent } from './home/home.component';
import { JSComponent } from './js/js.component';
import { LoginComponent } from './login/login.component';
import { PHPComponent } from './php/php.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"Js",component:JSComponent},
  {path:"Php",component:PHPComponent},
  {path:"Android",component:ANDROIDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
