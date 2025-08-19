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
        console.log('error desde user-list.component', error);
      },
    });
  }
}
