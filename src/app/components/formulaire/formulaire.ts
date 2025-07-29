import { Component } from '@angular/core';
import {Librairie} from '../../pages/librairie/librairie';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [Librairie, FormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css'
})
export class Formulaire {
  message : string = ""
  message2 : string = ""
  isSubmitted : boolean = false

  librairie : Librairie = {
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
    return this.librairie
  }
}
