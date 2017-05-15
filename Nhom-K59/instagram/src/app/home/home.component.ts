import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments = [];
 
 addComment(newComment: string)
 {
   if(newComment)
   {
     this.comments.push(newComment);
   }
 }
 
  constructor() { }

  ngOnInit() {
  }

}
