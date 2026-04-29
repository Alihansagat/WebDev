import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { NoteAdd } from "../../components/note-add/note-add";


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, NoteAdd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  showAlert() {
    alert('This is an alert message!');
  }

  
}
