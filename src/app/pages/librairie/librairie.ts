import { Component } from '@angular/core';
import { EmojiPipe } from '../../utils/pipes/emoji-pipe';
import { Book } from '../../utils/types/book.type';

@Component({
  selector: 'app-librairie',
  imports: [EmojiPipe],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css'
})
export class Librairie {
  books : Book[] = [
    {title: "Livre 1", author: "Auteur 1", isRead: true},
    {title: "Livre 2", author: "Auteur 1", isRead: false},
    {title: "Livre 3", author: "Auteur 2", isRead: true},
    {title: "Livre 4", author: "Auteur 1", isRead: false},
    {title: "Livre 5", author: "Auteur 2", isRead: true},
  ]

  toggleIsRead(book: Book) : void {
    book.isRead = !book.isRead
  }
}
