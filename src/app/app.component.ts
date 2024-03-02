import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidationformComponent } from './validationform/validationform.component';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValidationformComponent, FormsModule],
  providers: [ValidationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jsonvalidation-front';
}
