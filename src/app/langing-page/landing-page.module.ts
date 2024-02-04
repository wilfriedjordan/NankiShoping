import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./component/landing-page/landing-page.component";
import { ArticleModule } from "../article/article.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    ArticleModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LandingPageComponent,
  ]
})

export class LandingPageModule { }
