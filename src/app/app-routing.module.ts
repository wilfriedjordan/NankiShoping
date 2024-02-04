import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './langing-page/component/landing-page/landing-page.component'
import { ContactComponent } from './core/component/contact/contact.component';
import { BlogComponent } from './core/component/blog/blog.component';
import { NewArticleComponent } from './article/component/new-article/new-article.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ArticleDetailComponent } from './article/component/article-detail/article-detail.component';
const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'contact', component:ContactComponent},
  {path:'blog', component:BlogComponent},
  {path:'create',component:NewArticleComponent,canActivate:[AuthGuard]},
  {path:'article/:id',component:ArticleDetailComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
