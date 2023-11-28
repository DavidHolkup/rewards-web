import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root/root.component';
import { RewardsComponent } from './root/rewards/rewards.component';
import { TasksComponent } from './root/tasks/tasks.component';
import { TaskComponent } from './root/tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    RewardsComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
