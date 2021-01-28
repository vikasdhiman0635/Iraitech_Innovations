import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzal',
  templateUrl: './puzal.component.html',
  styleUrls: ['./puzal.component.css']
})
export class PuzalComponent implements OnInit {

  data=[2,3,10,15,26,35,50,63];
  diveide=[];

  consecutive=[1,7,5,11,9,15,13,19];

  constructor() { }

  ngOnInit(): void 
  {
    this.diveide.push(2);
    for(let i=0;i<this.data.length;i++)
    {
      let x=this.data[i]+this.consecutive[i];
      // console.log(x);
      if(x!=null)
      {
        this.diveide.push(x);
      }
    }
    console.log(this.diveide);
  }

}
