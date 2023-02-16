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
  empresa: Empresa[]
  newTask: string;
  tasks: string[] = [];
  showMyContainer: boolean = false;
  addTask(v) {
    if (v != '')
    this.tasks.push(v);
    localStorage.setItem('colaboradores', JSON.stringify(this.tasks));
    this.showMyContainer = false;
    this.newTask = '';
  }
  @ViewChild('input') input;
  focusTextInput() {
    this.input.nativeElement.focus();
  }
  constructor(private host: ElementRef) {
    const storedTasks = localStorage.getItem('colaboradores');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  ngOnInit(): void {
  }
}
