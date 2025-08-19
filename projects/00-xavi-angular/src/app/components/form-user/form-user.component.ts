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

    addressForm: FormGroup;
    city: FormControl;
    street: FormControl;
    

    constructor(public userService:UserService ) {
        
        this.id = new FormControl('');
        this.name = new FormControl('');
        this.email = new FormControl('');
        
        this.userForm = new FormGroup({
            id: this.id,
            name: this.name,
            email: this.email,
        });

        this.city = new FormControl('');
        this.street = new FormControl('');
        this.addressForm = new FormGroup({
            city: this.city,
            street: this.street,
        });
    }
    
    postUser() {
        console.log('FormUserComponent submit', this.userForm.value, this.addressForm.value);
    }

}
