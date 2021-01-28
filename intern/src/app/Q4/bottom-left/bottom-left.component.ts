import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnInit {

  constructor() { }

  @Input()
  // emp:String;
  data:String;
  
  ngOnInit(): void {
  }

}
