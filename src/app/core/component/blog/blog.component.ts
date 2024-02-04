import { NgForm } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { Article } from '../../../article/Models/article.model';
import{ ArticleService } from '../../../article/services/article.service'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  constructor(private articleService: ArticleService){}
  articlesBlogs!:Article[]
  ngOnInit(): void {
    this.articlesBlogs =this.articleService.articleslider()
  }
}
