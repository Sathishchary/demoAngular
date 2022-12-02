import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {
  @ViewChild(ViewComponent) viewChild!: ViewComponent;

  constructor() { }

  ngOnInit(): void {
  }

  updatechildView(){
    this.viewChild.name = "New Name";
  
  }
  
}
