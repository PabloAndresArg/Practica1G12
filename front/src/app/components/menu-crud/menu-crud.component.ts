import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-crud',
  templateUrl: './menu-crud.component.html',
  styleUrls: ['./menu-crud.component.css']
})
export class MenuCrudComponent implements OnInit {
  private rutas :any = ['/create' , '/read' , '/update' , '/delete'];
  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  goto_create():void{
    this.router.navigate([this.rutas[0]]);
  }

}
