import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { QuestionListComponent } from '../question-list/question-list.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PhotoGalleryComponent,
    CommonModule,
    ReactiveFormsModule,
    QuestionFormComponent,
    QuestionListComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  showPhoto = false;
  photos = [
    '/images/photo_13.jpg',
    '/images/photo_19.jpg',
    '/images/photo_4.jpg',
  ];

  isAdmin: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }

  togglePhoto() {
    this.showPhoto = !this.showPhoto;
  }
}
