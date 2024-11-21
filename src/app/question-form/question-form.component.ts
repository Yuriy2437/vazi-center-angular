import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { QuestionsService } from '../services/questions.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-question-form',
    standalone: true,
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.css'],
    imports: [ReactiveFormsModule, CommonModule]
})
export class QuestionFormComponent {
  questionForm!: FormGroup;

  // constructor(private fb: FormBuilder, private http: HttpClient) {}

  constructor(
    private fb: FormBuilder,
    private questionsService: QuestionsService
  ) {
    this.questionForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(25)],
      ],
      question: ['', [Validators.required, Validators.maxLength(150)]],
    });
  }

  // ngOnInit() {
  //   this.questionForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.maxLength(25)]],
  //     email: [
  //       '',
  //       [Validators.required, Validators.email, Validators.maxLength(25)],
  //     ],
  //     question: ['', [Validators.required, Validators.maxLength(150)]],
  //   });
  // }

  onSubmit() {
    if (this.questionForm.valid) {
      this.questionsService.addQuestion(this.questionForm.value).subscribe({
        next: () => {
          console.log('Question added successfully');
          this.questionForm.reset();
        },
        error: (error) => console.error('Error adding question:', error),
      });
    }
  }
}
