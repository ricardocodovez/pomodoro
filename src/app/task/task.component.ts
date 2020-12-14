import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tarefas = [];

  constructor(private task: TasksService) { }

  ngOnInit(): void {

    this.task.tasks().subscribe(dados => {

      // this.tarefas = dados.tasks;

      // console.log(dados.tasks)
    })
  }

}
