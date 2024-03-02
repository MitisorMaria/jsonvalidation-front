import { Component } from '@angular/core';
import { Data } from '../Data';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-validationform',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [ValidationService],
  templateUrl: './validationform.component.html',
  styleUrl: './validationform.component.css'
})
export class ValidationformComponent {
  constructor(private validationService: ValidationService) { }

  sendButtonClicked(data: any) {
    
    this.validationService.validateJSON(data).subscribe(
      success => {
        alert(success.toString);
        //this.commentSuccessfullyAdded = true;
      },
      response => {
        //alert("Bad");
        //this.commentSuccessfullyAdded = false;
      },
      () => {
      }
    );
  }

}
