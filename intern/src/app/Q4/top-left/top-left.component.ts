import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.css']
})
export class TopLeftComponent implements OnInit {

  constructor() { }

  @Input()
  // emp:String;
  data:String;
  
  ngOnInit(): void {
  }

}
