import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss'
})
export class FormUserComponent {

    userForm: FormGroup;
    id: FormControl;
    name: FormControl;
    email: FormControl;
    address	: FormControl;

    constructor(public userService:UserService ) {
        
        this.id = new FormControl('');
        this.name = new FormControl('');
        this.email = new FormControl('');
        this.address = new FormControl('');

        this.userForm = new FormGroup({
            id: this.id,
            name: this.name,
            email: this.email,
            address: this.address,
        });
    }
    
    handleSubmit() {
        console.log('FormUserComponent submit');
    }

}
