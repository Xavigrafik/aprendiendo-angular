import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
    imports: [CommonModule, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

    selectedUser: any;
    constructor(private route:ActivatedRoute, public userService:UserService) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        console.log('id: ', id);
        this.getUser(id);
    }

    getUser(id: number) {
         this.userService.getUser(id).subscribe({
             
            next: (data) => {
                 this.selectedUser = data;
            },
            error: (error) => {
                console.log("error desde user-detail.component", error);
                
            },
            
        })
    }
}   
