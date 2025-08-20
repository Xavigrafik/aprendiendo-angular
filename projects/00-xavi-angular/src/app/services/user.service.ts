import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // readonly API_URL: string = "https://jsonplaceholder.typicode.com/users";
    readonly API_URL: string = "https://caae6476b5adba464dc0.free.beeceptor.com/api/users";
    
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
    postUser(user: any) {
        return this.http.post<any[]>(`${this.API_URL}`, user)
    }

    deleteUser(id: number) {
        console.log('DELETING:', id);
        return this.http.delete<any[]>(`${this.API_URL}/${id}`)
    }

}
