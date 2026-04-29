import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { signal } from '@angular/core';

@Component({
  selector: 'app-note-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  constructor(private noteService: NoteService) {

  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  });

  protected addNote() {
    const nateData = this.newNote();
    if(!nateData.title || !nateData.content) {
      alert('Please fill in both title and content');
      return;
    }

    this.noteService.addNote(nateData.title, nateData.content);

    this.newNote.set({
      title: '',
      content: ''
    });
    
  }
}
