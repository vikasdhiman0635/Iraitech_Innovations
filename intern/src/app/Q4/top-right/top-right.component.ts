import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css']
})
export class TopRightComponent implements OnInit {

  constructor() { }

  @Input()
  // emp:String;
  data:String;

  ngOnInit(): void {
  }

}
