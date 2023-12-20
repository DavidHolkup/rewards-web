import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root/root.component';
import { RewardsComponent } from './root/rewards/rewards.component';
import { TasksComponent } from './root/tasks/tasks.component';
import { TaskComponent } from './root/tasks/task/task.component';
import { NgParticlesModule } from 'ng-particles';
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RewardComponent } from './root/rewards/reward/reward.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    RewardsComponent,
    TasksComponent,
    TaskComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
