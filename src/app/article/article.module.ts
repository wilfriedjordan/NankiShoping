import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './component/article/article.component';
import { NewArticleComponent } from './component/new-article/new-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';



@NgModule({
  declarations: [
    ArticleComponent,
    NewArticleComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticleComponent,
    NewArticleComponent,
    ArticleDetailComponent
  ]
})
export class ArticleModule { }
