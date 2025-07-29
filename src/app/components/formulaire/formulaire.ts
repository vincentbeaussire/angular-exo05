import { Component } from '@angular/core';
import {Librairie} from '../../pages/librairie/librairie';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Book} from '../../utils/types/book.type';

@Component({
  selector: 'app-formulaire',
  imports: [Librairie, FormsModule, NgIf],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css'
})
export class Formulaire {
  message : string = ""
  message2 : string = ""
  isSubmitted : boolean = false

  book : Book = {
    title: "",
    author: "",
    isRead: false
  }

  updateMessage(event: Event) : void {
    let input = event.target as HTMLInputElement
    this.message = input.value
  }

  submitBook() : void {
    this.isSubmitted = true
  }

  get isRead() {
    return this.book.isRead;
  }
}
