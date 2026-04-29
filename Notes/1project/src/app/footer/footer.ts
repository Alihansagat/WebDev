import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import {}

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() subscribeClicked = new EventEmitter<void>();

  username = '';

  onSubscribe() {
    this.subscribeClicked.emit();
  }

}
