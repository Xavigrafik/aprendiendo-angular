import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-list',
    imports: [CommonModule, RouterLink],
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
    constructor(public userService: UserService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe({
            next: (data) => {
                this.userService.users = data;
            },
            error: (error) => {
                if (error.status == 429 ) {
                    console.log('Tas queado SIN REQUESTS... desde user-list.component', error);
                    this.userService.users = [{
                        "id": 1,
                        "name": "USUARIO DEFAULT",
                        "username": "error 429",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "city": "Gwenborough",
                        },
                    }];
                } else {
                    console.log('error desde user-list.component', error);
                }
            },
        });
    }

    deleteUser(id: number) {
        this.userService.deleteUser(id).subscribe({
            next: (data) => {
                console.log('data OK: ', data);
                this.getUsers();
            },
            error: (error) => {
                console.log('error desde form-user.component', error);
            },
        });
    }
}
