import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestService, SocketService } from './_services/feathers.service';
import { ScheduleService } from './schedules/schedule.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [  
    RestService, 
    SocketService,
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
