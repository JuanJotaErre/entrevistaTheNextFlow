import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Back} from "../service/back.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  resultat: string = "";

  constructor(private formBuilder: FormBuilder,
              private service: Back) { }

  primeraStringControl = new FormControl();
  segonaStringControl = new FormControl();

  formGroup: FormGroup = this.formBuilder.group({
    primeraString: this.primeraStringControl,
    segonaString: this.segonaStringControl
  })

  ngOnInit(): void {
  }

  concatenar() {
    console.log(this.primeraStringControl.value + " " + this.segonaStringControl.value)
    this.service.concatenar(this.primeraStringControl.value, this.segonaStringControl.value).subscribe(resp => {
      this.resultat = resp
      console.log(this.resultat)
    })
  }
}
