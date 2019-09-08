import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  /*title: string = "test"
  content: string ="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
  loveIts: number = 45
  created_at: Date = "2019-01-05"*/

  @Input() titreblog :string
  @Input() content : string
  @Input() loveits : number 
  @Input() created_at : Date

  constructor() { }

  ngOnInit() {
  }

  ajouterLike(){
    this.loveits = this.loveits + 1;
    return this.loveits;
  }

  diminuerLike(){
    this.loveits = this.loveits - 1;
    return this.loveits;
  }

}
