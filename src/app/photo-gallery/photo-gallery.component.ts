import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css',
})
export class PhotoGalleryComponent {
  @Input() photos: string[] = [];
  currentPhotoIndex = 0;

  handlePrevPhoto() {
    this.currentPhotoIndex =
      this.currentPhotoIndex === 0
        ? this.photos.length - 1
        : this.currentPhotoIndex - 1;
  }

  handleNextPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
  }
}
