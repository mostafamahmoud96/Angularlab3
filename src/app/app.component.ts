import { Component } from '@angular/core';
import {BooksService} from'./services/books.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finder';
  data: any;
  name: any;
  constructor(private booksService: BooksService){}
  ngOnInit(): void {  
  }
  handlesearch(){
    this.name=document.getElementById('user');
    this.name=this.name.value;
    this.booksService.setParram(this.name); 
    this.booksService.getBooksList().subscribe({
      next: (data) => {
        data['items'].forEach(element => {
        console.log(element.volumeInfo.title);
        });
        this.data=data['items']; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })
  }
}
  