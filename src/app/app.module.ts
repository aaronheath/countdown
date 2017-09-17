import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {CountdownComponent} from "./countdown/countdown.component";

const routes: Routes = [
  {path: ':countdown', component: CountdownComponent},
  { path: '**', redirectTo: '/la', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
