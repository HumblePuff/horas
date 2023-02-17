import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { Empresa } from 'src/app/shared/empresa';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  empresas: Empresa[] = [];

  constructor(private host: ElementRef) {
    const storedTasks = localStorage.getItem('empresas');
    if (storedTasks) {
      this.empresas = JSON.parse(storedTasks);
    }
  }
  ngOnInit(): void {
  }

  addTask(a,b) {
    const emp1 = new Empresa();
    if (a != '' && b != '') {
    emp1.name = a;
    emp1.remainingTime = b;
    this.empresas.push(emp1);
    localStorage.setItem('empresas', JSON.stringify(this.empresas));
    }
  }
}
