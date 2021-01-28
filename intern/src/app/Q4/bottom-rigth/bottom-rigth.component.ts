import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-rigth',
  templateUrl: './bottom-rigth.component.html',
  styleUrls: ['./bottom-rigth.component.css']
})
export class BottomRigthComponent implements OnInit {

  constructor() { }

  @Input()
  // emp:String;
  data:String;
  
  ngOnInit(): void {
  }

}
