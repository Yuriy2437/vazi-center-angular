import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsService } from '../services/questions.service';
import { Observable } from 'rxjs';

interface Question {
  _id: string;
  name: string;
  email: string;
  question: string;
}

@Component({
  selector: 'app-question-list',
  standalone: true,
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  imports: [CommonModule],
})
export class QuestionListComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  questions$!: Observable<Question[]>;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questions$ = this.questionsService.questions$;
    this.questionsService.getQuestions().subscribe();
  }

  deleteQuestion(id: string) {
    this.questionsService.deleteQuestion(id).subscribe({
      next: () => console.log('Question deleted successfully'),
      error: (error) =>
        console.error('Error deleting question:', error.message),
    });
  }

  answerQuestion(email: string) {
    window.location.href = `mailto:${email}`;
  }
}
