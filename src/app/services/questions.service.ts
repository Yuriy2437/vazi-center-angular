import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

interface Question {
  _id: string;
  name: string;
  email: string;
  question: string;
}

interface DeleteResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private apiUrl: string;
  private questionsSubject = new BehaviorSubject<Question[]>([]);
  questions$ = this.questionsSubject.asObservable();

  constructor(private http: HttpClient) {
    if (!environment.apiUrl) {
      console.error('API URL is not defined in the environment');
      this.apiUrl = ''; // Установите значение по умолчанию или выбросите ошибку
    } else {
      this.apiUrl = `${environment.apiUrl}/questions`;
    }
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl).pipe(
      tap((questions) => this.questionsSubject.next(questions)),
      catchError(this.handleError)
    );
  }

  addQuestion(question: Omit<Question, '_id'>): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question).pipe(
      tap((newQuestion) => {
        const currentQuestions = this.questionsSubject.value;
        this.questionsSubject.next([...currentQuestions, newQuestion]);
      }),
      catchError(this.handleError)
    );
  }

  deleteQuestion(id: string): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const currentQuestions = this.questionsSubject.value;
        const updatedQuestions = currentQuestions.filter((q) => q._id !== id);
        this.questionsSubject.next(updatedQuestions);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
