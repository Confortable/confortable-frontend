import { Component } from '@angular/core';
import { RestService, SocketService } from './_services/feathers.service';
import { ScheduleService } from './schedules/schedule.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  private _messages: any[] = [];
  private _schedules: any = {};
  title = 'app works!';
  
  constructor(private rest:RestService, private socket:SocketService, private _scheduleService: ScheduleService) {}
  
  // Called once when the component is early in its creation
  ngOnInit() {
    this._scheduleService.find({}).then(schedules => {
       this._schedules = schedules;
       console.log(schedules);
    });
  }
  
}

