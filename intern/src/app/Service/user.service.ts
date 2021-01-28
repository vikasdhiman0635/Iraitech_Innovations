import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BasesURL="http://localhost:5000/employees/save";

  constructor(private http:HttpClient) { }

  savedata(data):Observable<any>
  {
    return this.http.post(this.BasesURL,data);
  }

}
