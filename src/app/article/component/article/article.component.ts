import { Component,OnInit,Input } from '@angular/core';
import { Article } from '../../Models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  acti!:string
  constructor(private router:Router) { }

  ngOnInit(): void {
    //this.acti = 'r'
  }
  Addlike():void{
    this.article.like++
  }
  viewArticle():void{
    this.router.navigateByUrl(`article/${this.article.id}`)
  }
}
