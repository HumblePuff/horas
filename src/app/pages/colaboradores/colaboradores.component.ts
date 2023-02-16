import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {
  newTask: string;
  tasks: string[] = [];
  showMyContainer: boolean = false;
  addTask(v) {
    if (v != '')
    this.tasks.push(v);
    localStorage.setItem('empresa', JSON.stringify(this.tasks));
    this.showMyContainer = false;
    this.newTask = '';
  }
  @ViewChild('input') input;
  focusTextInput() {
    this.input.nativeElement.focus();
  }
  constructor(private host: ElementRef) {
    const storedTasks = localStorage.getItem('empresa');
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
