import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../Models/article.model';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;
  //articles$: Observable<Article>;
  //rela: Article[] = [];

  constructor(
    private ArticleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id'];
    this.article = this.ArticleService.getArticleById(idParam);
  }
}