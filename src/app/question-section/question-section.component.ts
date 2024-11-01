import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-question-section',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss'],
})
export class QuestionSectionComponent implements OnInit {
  @Input() apiEndpoint!: string;
  @Input() title!: string;
  @Input() isAdmin!: boolean;

  name = '';
  email = '';
  question = '';
  questions: any[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionsService.getQuestions(this.apiEndpoint).subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  handleSubmit() {
    this.questionsService
      .submitQuestion(this.apiEndpoint, {
        name: this.name,
        email: this.email,
        question: this.question,
      })
      .subscribe(
        () => {
          this.loadQuestions();
          this.name = '';
          this.email = '';
          this.question = '';
        },
        (error) => {
          console.error('Error submitting question:', error);
        }
      );
  }

  handleDelete(id: string) {
    this.questionsService.deleteQuestion(this.apiEndpoint, id).subscribe(
      () => {
        this.loadQuestions();
      },
      (error) => {
        console.error('Error deleting question:', error);
      }
    );
  }

  handleAnswer(email: string) {
    // Implement email sending logic here
    console.log('Answering to:', email);
  }
}
