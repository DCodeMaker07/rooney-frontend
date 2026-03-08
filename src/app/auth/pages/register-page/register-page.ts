import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.html',
  styles: `
    @keyframes slideAnimation {
      0% { opacity: 0; transform: scale(1); }
      5% { opacity: 1; }
      33% { opacity: 1; }
      38% { opacity: 0; transform: scale(1.05); }
      100% { opacity: 0; }
    }
    .animate-slideshow {
      animation: slideAnimation 15s infinite;
    }
  `,
})
export class RegisterPage {

  readonly images: string[] = [
    'assets/concert_register.webp',
    'assets/concert_register_2.webp',
    'assets/concert_register_3.webp',
  ];

  fb = inject(FormBuilder);

  registerForm = this.fb.group({
    email: ['example@test.com', [Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  async onSubmit() {
    console.log('presionado');
    console.info(this.registerForm.value);
  }

}
