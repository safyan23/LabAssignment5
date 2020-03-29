import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }
}
