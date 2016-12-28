import { Injectable } from '@angular/core';
import { RestService, SocketService } from '../_services/feathers.service';

@Injectable()
export class ScheduleService {
  private _rest;
//  private _socket;
  debugString = "Hi, from Schedule Service!";

  constructor(
    // private _socketService: SocketService,
    private _restService: RestService
  ) {
    // Let's get both the socket.io and REST feathers services for schedules!
    this._rest = _restService._app.service('lessons/0G1cMv0AaggQzVqL');
    // this._socket = _socketService.getService('schedules');
  }
  
  find(query: any) {
    return this._rest.find(query);
  }

  get(id: string, query: any) {
    return this._rest.get(id, query);
  }

  create(schedule: any) {
    return this._rest.create(schedule);
  }

  // remove(id: string, query: any) {
  //   return this._socket.remove(id, query);
  // }
}
