import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
 authForm!: FormGroup;
  mode: 'login' | 'register' = 'login';

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mode = params['mode'] === 'register' ? 'register' : 'login';
      this.buildForm();
    });
  }

  buildForm() {
    this.authForm = this.fb.group(
      this.mode === 'register'
        ? {
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
          }
        : {
            phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
          }
    );
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    const values = this.authForm.value;
    if (this.mode === 'login') {
      console.log('Login via OTP:', values.phone);
      // Call OTP login logic
    } else {
      console.log('Registering user:', values);
      // Call registration logic with email & phone
    }
  }
}
