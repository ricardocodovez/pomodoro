import { BoundElementPropertyAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  myValue;
  title: string = 'Timer';
  minutos: number;
  segundos: number;
  Paused: boolean = true;
  vezes: number = 0;
  cronometro: number = 24;
  buttonLabel: string;
  relogio: any;
  // datos 25, 5, 15
  ciclo: number = 25;
  tarefas = [];

  item: any = '';
  item2: any = '';

  lista: any = this.tarefas;
  ocultarEdit: boolean = true;

  constructor() {
    this.contar();
    setInterval(() => this.tick(), 10);
  }

  aggTarefa():void {
    if (this.vezes % 4 === 0) {
      this.minutos = 25
      this.segundos = 0
    }

    this.tarefas.push(this.item);
    this.item = '';
  }



  editTarefa(i): void {
    this.ocultarEdit = false;
    this.item2 = this.tarefas[i];
    this.myValue = i;
  }

  actTarefa(): void {
    this.ocultarEdit = true;
    let i = this.myValue;
    for ( let j = 0; j < this.tarefas.length; j++) {
      if (i == j) {
        this.tarefas[i] = this.item2;
        this.item2 = '';
        console.log(this.item2.value);
      }
    }
  }

  deletTarefa(i) {
    var resposta = confirm('Deseja eliminar tarefa?');
    if (resposta) {
      this.tarefas.splice( i, 1)
    }
  }




  contar(): void {
    this.minutos = 25;
    this.segundos = 0;
    this.buttonLabel = 'Empezar';
  }


   tick(): void {
    if(this.minutos < this.cronometro || this.segundos <59) {
      this.buttonLabel = this.Paused ? 'Recomeçar' : 'Detener';
    }

    if(!this.Paused) {
      this.buttonLabel = 'Detener';

      if(--this.segundos < 0) {
        this.segundos = 59;
        if(--this.minutos < 0) {
          this.ciclo = 4;
          this.cronometro = 4;
          this.minutos = this.cronometro;
          this.segundos = 59;
        }
      }
    }
  }

  iniciarPomo(): void{
    this.Paused = !this.Paused;

    if (!this.Paused && this.relogio === undefined) {
      this.relogio = setInterval(() => this.tick(), 1000);
    }
  }


  ngOnInit(): void {
    this.minutos = 25;
    this.segundos = 0;
    this.buttonLabel = 'Empezar';
  }

}


    // if (!this.Paused && this.relogio === undefined) {
    //   this.relogio = setInterval(() => this.tick(), 1000);
    // }
