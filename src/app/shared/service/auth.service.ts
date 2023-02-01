import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iadmin } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logInStatus : boolean = false;
  public adminAuth:Iadmin= {
    userId: 'admin', 
    password: 'admin@123'
  }
  constructor() { }

  isAuthenticated(): Observable<boolean>{
    return new Observable((observer)=>{
        this.logInStatus = localStorage.getItem('token') ? true : false;
        observer.next(this.logInStatus)
    })
}


  logIn(user:string, pass:string){

    if(this.adminAuth.userId == user && this.adminAuth.password == pass ){
      this.logInStatus = true
      let token = 'token';
      localStorage.setItem('token',token)
    }else{
      alert('please enter valid userId and password')
    }  
  }

  logOut(){
    this.logInStatus = false
   localStorage.removeItem('token') 
  }
}

