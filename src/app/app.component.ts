import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Post';
  posts=[
    {    
      titreblog : "1er post",
      content : "Le Lorem Ipsum est simplement du faux texte employé",
      loveits : 45,
      created_at : new Date()
    },  
    {  
      titreblog : "2er post",
      content : "Le Lorem Ipsum est simplement du faux texte employé",
      loveits : 0,
      created_at : new Date()
    },  
    {
      titreblog : "3er post",
      content : "Le Lorem Ipsum est simplement du faux texte employé",
      loveits : 3,
      created_at : new Date()
    }
  ]
}
