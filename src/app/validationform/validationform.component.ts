import { Component, OnInit } from '@angular/core';
import { Data } from '../Data';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { HttpClientModule } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';

interface Response {
  message: string;
  isValid: boolean;
}

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

  selectedFile!: File | null;
  response!: Response;
  message!: string;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  sendButtonClicked(data: Data) {
    data.schemaFile = this.selectedFile;
  
    this.validationService.validateJSON(data).subscribe(
      {
        next: (success: any) => {
          this.response = <Response>success;
          this.message = this.response['message'];
        },
        error: (problem: any) => {
          this.message = problem.error.message;
        }
      }
    );
  }

  clearFile() {
    this.selectedFile = null;
  }
}