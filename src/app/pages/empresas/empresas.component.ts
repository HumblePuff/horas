import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { Empresa } from 'src/app/shared/empresa';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[] = [];
  empsel: String = "Empresa 1";
  constructor(private host: ElementRef) {
    const storedTasks = localStorage.getItem('empresas');
    if (storedTasks) {
      this.empresas = JSON.parse(storedTasks);
    }
    else {
      const emp1 = new Empresa();
      const emp2 = new Empresa();
      emp1.name = "Empresa 1";
      emp1.remainingTime = 11;
      this.empresas.push(emp1);
      emp2.name = "Empresa 2";
      emp2.remainingTime = 22;
      this.empresas.push(emp2);
      localStorage.setItem('empresas', JSON.stringify(this.empresas));
    }
  }
  ngOnInit(): void {
  }
  selectempresa(emp: String) {
    this.empsel = emp;
  }
}
