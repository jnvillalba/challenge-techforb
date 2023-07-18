import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    //URL = environment.URL + 'User/';
  
    URL = 'http://localhost:8080/user/';
    constructor(private httpClient: HttpClient) {}
  
    public usuarios(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.URL + 'usuarios');
    }
  
    public details(id: number): Observable<User> {
      return this.httpClient.get<User>(this.URL + `${id}`);
    }
  
    public update(id: number, person: User): Observable<any> {
      return this.httpClient.put<any>(this.URL + `update/${id}`, person);
    }
  
    /*
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.URL + `delete/${id}`)
    }*/
    /*
    public save(ed: User): Observable<any>{
      return this.httpClient.post<any>(this.URL + `create`, ed)
    }*/

    /*
      {id}/agregarTarjeta")
      {id}/depositarDinero")
      {id}/extraerDinero")
      {id}/transferir")

    */
  }