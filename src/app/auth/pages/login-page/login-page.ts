import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.html',
  styles: ``,
})
export class LoginPage {

  fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  async onSubmit() {
    if (this.loginForm.invalid) return;

    console.log('Intento de login presionado');
    console.info(this.loginForm.value);

    const { email, password } = this.loginForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userFound = users.find((u: any) => u.email === email && u.password === password);

    if (userFound) {
      alert('¡Bienvenido de nuevo!');
    } else {
      alert('Credenciales incorrectas o usuario no registrado.');
    }
  }
}