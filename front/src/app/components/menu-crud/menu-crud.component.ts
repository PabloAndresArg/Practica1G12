import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsersService} from '../../services/users.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-menu-crud',
  templateUrl: './menu-crud.component.html',
  styleUrls: ['./menu-crud.component.css']
})
export class MenuCrudComponent implements OnInit {
  users = [] as User[];

  constructor(
    private userService: UsersService,
  ) {
  }

  ngOnInit(): void{
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }
}
