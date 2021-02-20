import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsersService} from '../../services/users.service';
import { User } from '../../models/user';
import { Users } from '../../models/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-crud',
  templateUrl: './menu-crud.component.html',
  styleUrls: ['./menu-crud.component.css']
})
export class MenuCrudComponent implements OnInit {
  users = [] as User[];
  user = {} as User;

  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor(
    private userService: UsersService,
  ) {
  }

  ngOnInit(): void{
    this.getUsers();
  }

  deleteUser(id) {
    this.userService.deleteUsers(id).subscribe(res => {
      console.log(res);
      let counter = 0;
      Users.map(user => {
        if(user.id == id) {
          delete Users[counter];
        }
        counter++;
      })
      this.getUsers();
    });
  }
  

  getUsers(){
    this.userService.getUsers().subscribe(res => {
      this.users = Users;
      console.log(this.users);
    });
  } 

  updateUser(id) {
    const { name, password, email } = this.createForm.value;
    this.user = {
      name, password, email
    }
    
    this.userService.updateUser(this.user,id).subscribe(res => {
      let counter = 0;
      Users.map(user => {
        if(user.id == id) {
          Users[counter] = this.user;
        }
        counter++;
      });
      this.getUsers();
    }) 
  }

  createUser() {
    const { name, password, email } = this.createForm.value;
    this.user = {
      name, password, email
    }
    console.log(this.user);
   this.userService.createUser(this.user).subscribe(res => {
      this.users.push(this.user);
      console.log(res);
    }); 
  }

}
