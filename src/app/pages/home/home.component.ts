import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/shared/empresa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  empresas: Empresa[] = [];
  constructor() { }
  resetadd() {
    
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
  ngOnInit(): void {
  }

}
