import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formulario: FormGroup
  esNuevo: boolean
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario()
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      contrasenna: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    })
  }

  agregar() {
    console.log(JSON.stringify(this.formulario.value))
    this.formulario.reset()
  }



}
