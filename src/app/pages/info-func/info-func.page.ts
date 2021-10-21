import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service'
import {Task } from '../../model/task'

@Component({
  selector: 'app-info-func',
  templateUrl: './info-func.page.html',
  styleUrls: ['./info-func.page.scss'],
})
export class InfoFuncPage implements OnInit {
  searchTerm: string;
  tasks:Task[]
  constructor(private todoService : TodoService) {
   
  }
  
  ngOnInit(){
     this.todoService.getTasks().subscribe(
       res=>{
         this.tasks= res
       },
       err=>console.log(err)
     )
  }
  
  removeTask(id:string){
    this.todoService.deleteTask(id);
  }
}
