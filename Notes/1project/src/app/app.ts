import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { NoteAdd } from './components/note-add/note-add';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CommonModule, RouterOutlet], 
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App {
  

  handleSubscribe() {
    alert('Subscribed to newsletter!');
    console.log('User subscribed to newsletter');
  }
  
  title = "Welcome to my note-taking app!";

  
}
