import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  nestedForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit()
  {    
    this.nestedForm = this._fb.group({      
      phoneno: this._fb.array([this.adddesc()]),
    });

  }

  adddesc() {
    return this._fb.group({
      phoneno1: [null, Validators.required],
    });
  }

  addAddress1() {
    this.phoneno.push(this.adddesc());
  }
  removeAddress1(index) {
    this.phoneno.removeAt(index);
  }

  get phoneno() {
    return <FormArray>this.nestedForm.get('phoneno');
  }

  submitHandler(data) 
  {
    console.log(this.nestedForm.value);
  }


}
