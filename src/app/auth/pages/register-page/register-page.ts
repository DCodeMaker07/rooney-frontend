import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styles: ``,
})
export class RegisterPage {

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
