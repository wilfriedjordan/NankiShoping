import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './component/blog/blog.component';
import { ArticleModule } from '../article/article.module';
import { PanierComponent } from './component/panier/panier.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    PanierComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
  ]
})
export class CorsModule { }
