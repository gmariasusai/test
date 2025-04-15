import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userId: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Form submitted');
    console.log('UserId: ', this.userId);
    console.log('password: ', this.password);

    if (this.userId === 'admin' && this.password === 'test') {
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      console.error('Invalid credentials');
      alert('Invalid User ID or Password');
    }
  }
}
