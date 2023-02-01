import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/service/auth.service';
import { HttpcallsService } from './shared/service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Iaurosystem';
  loader!:boolean;
constructor(private authService:AuthService, private _http:HttpcallsService, private router:Router){}
 ngOnInit(): void {
  this._http.loader.subscribe(res=> {
     this.loader = res
  })
}

onLogOut(){
  this.router.navigate(['/'])
 this.authService.logOut()
}
}
