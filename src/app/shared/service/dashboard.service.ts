import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Istudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  studentData:Istudent[]=[];
  onEditStudent$= new Subject();
  LogIn$= new Subject();
  constructor() { }
}
