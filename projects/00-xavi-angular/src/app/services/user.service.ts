import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly API_URL: string = "https://jsonplaceholder.typicode.com/users";
    
    users: any[]
    
    constructor(private http:HttpClient) {
      this.users = []
    }
    
    getUsers() {
        return this.http.get<any[]>(this.API_URL)
    }
    
    getUser(id:number) {
        return this.http.get<any[]>(`${this.API_URL}/${id}`)
    }
    


}
