import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
   username = '';
  password = '';
  confirmPassword = '';
  passwordMismatch = false;

  onSubmit() {
    this.passwordMismatch = this.password !== this.confirmPassword;
    if (!this.passwordMismatch) {
      // proceed with signup logic (e.g., API call)
      alert('Signup successful!');
    }
  }
}
