import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../Service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nestedForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private service:UserService) { }

  ngOnInit()
  {    
    this.nestedForm = this._fb.group({      
      X1: this._fb.array([this.adddesc()]),
      X2: this._fb.array([this.adddes()]),
    });

  }

  adddesc() {
    return this._fb.group({
      name: [null, Validators.required],
    });
  }

  adddes() {
    return this._fb.group({
      name: [null, Validators.required],
    });
  }

  addAddress1() {
    this.X1.push(this.adddesc());
  }
  removeAddress1(index) {
    this.X1.removeAt(index);
  }

  get X1() {
    return <FormArray>this.nestedForm.get('X1');
  }

  addAddress() {
    this.X2.push(this.adddes());
  }
  removeAddress(index) {
    this.X2.removeAt(index);
  }

  get X2() {
    return <FormArray>this.nestedForm.get('X2');
  }

  submitHandler(data) 
  {
    console.log(this.nestedForm.value);
    this.service.savedata(this.nestedForm.value).subscribe((Response)=>
    {
      console.log(Response);
      alert("data save");
    })
  }


}
