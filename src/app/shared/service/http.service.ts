import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Istudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {
  baseUrl = environment.baseUrl
  $updateEmitter=new Subject();
  loader =new BehaviorSubject(false)
  constructor(private _http:HttpClient) { }

  getAllstd():Observable<Istudent[]>{
    return this._http.get<Istudent[]>(this.baseUrl)
  }

  AddStd(obj:any):Observable<Istudent>{
    return this._http.post<Istudent>(this.baseUrl,obj)
  }

  getSingleStd(id:number):Observable<Istudent>{
    let stdurl = `${this.baseUrl}/${id}`
    return this._http.get<Istudent>(stdurl)
  }

  updatestd(id:number,obj:Istudent){
    let updatedUrl= `${this.baseUrl}/${id}`
    return this._http.patch(updatedUrl,obj)
  }

  deletestd(id:number){
    let deleteUrl= `${this.baseUrl}/${id}`
    return this._http.delete(deleteUrl)
  }
}
