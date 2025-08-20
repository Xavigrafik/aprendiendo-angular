import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    constructor(private route:ActivatedRoute, public userService:UserService, private router: Router) {}

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
                this.selectedUser = {
                        "id": 1,
                        "name": "USUARIO DEFAULT",
                        "username": "error 429",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "city": "Gwenborough",
                        },
                    };
                
            },
            
        })
    }

    deleteUser(id: number) {
        this.userService.deleteUser(id).subscribe({
            next: (data) => {
                console.log('data OK 2: ', data);
                 this.router.navigate(['/users']);
            },
            error: (error) => {
                console.log('error desde user-detail.component', error);
            },
        });
    }
}   
