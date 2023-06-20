import { Component, OnInit } from '@angular/core';
import { LoginDTOComponent } from './loginDTO.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  loginForm!: FormGroup;
  login: boolean = true;
  forgotPassword: boolean = false;
  sendPassord: boolean = false;
  errorSendPassord: boolean = false;
  savedPassord: boolean = false;
  savePassword: boolean = false;

  senha!: string;
  confirmarSenha!: string;
  email!: string;
  cnpj!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new LoginDTOComponent());
  }

  createForm(login: LoginDTOComponent) {
    this.loginForm =  this.formBuilder.group({
      senha: new FormControl(login.senha),
      confirmarSenha: new FormControl(login.confirmarSenha),
      email: new FormControl(login.email),
      cnpj: new FormControl(login.cnpj),
      remeberme: new FormControl(login.remeberme)
    })
  }

  onSubmit() {
    if(this.loginForm.value.cnpj == '' || this.loginForm.value.cnpj == null){
      this.cnpj = 'Preecha o campo cnpf!';
    if(this.loginForm.value.senha == '' || this.loginForm.value.senha == null){
        this.senha = 'Preecha o campo senha!';
      return;
      }
    }
    console.log(this.loginForm.value.cnpj);
    console.log(this.loginForm.value.senha);
    console.log(this.loginForm.value.remeberme);
  }

  setForgotPassword() {
    this.login = false;
    this.forgotPassword = true;
  }

  setCleanEmail(){
    this.email = '';
  }

  setCleanConfirmarSenha(){
    this.confirmarSenha = '';
  }

  setCleanSenha(){
    this.senha = '';
  }

  setCleanCnpj(){
    this.cnpj = '';
    this.errorSendPassord = false;
  }

  getPassword() {
    if(this.loginForm.value.cnpj == '' || this.loginForm.value.cnpj == null){
      this.cnpj = 'Preecha o campo cnpf!';
      return;
    }
    if(this.loginForm.value.cnpj == '09181254000128'){
      this.sendPassord = true;
      this.errorSendPassord = false;
    } 
    if(this.loginForm.value.cnpj != '09181254000128'){
      this.errorSendPassord = true;
    } 

    /*

    else {
       this.forgotPassword = false;
       this. savePassword = true;
    }
    */
  }
  setLogin() {
    this.login = true;
    this.forgotPassword = false;
    this.sendPassord = false;
    this.savePassword = false;
    this.savedPassord = false;
  }

  savePasswords() {
    if (this.loginForm.value.senha == '' || this.loginForm.value.senha == null) {
      this.senha = 'Preecha o campo senha';
      if (this.loginForm.value.confirmarSenha == '' || this.loginForm.value.confirmarSenha == null) {
        this.confirmarSenha = 'Preecha o campo confirmar senha';
      }
    }
    if (this.loginForm.value.senha == this.loginForm.value.confirmarSenha) {
      this.savedPassord = true;
    }
    if (this.loginForm.value.confirmarSenha != this.loginForm.value.senha) {
      this.confirmarSenha = 'O campo confirmar senha é diferente';
    }
    return;
  }
}
