import { Component ,OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { Article } from '../../Models/article.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss'
})
export class NewArticleComponent implements OnInit {
  @Input() article!: Article;
  public articleForm!: FormGroup;
  public articlesObser$!:Observable<Article>;
  constructor(private formBuilder:FormBuilder ){}
  ngOnInit(): void {
    this.articleForm =this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required],
      price:['',Validators.required],
      categories:['',Validators.required],
    })
    this.articlesObser$ = this.articleForm.valueChanges.pipe(
      map((formValue:Article)=>({
        ...formValue,
        id:0,
        like:0,
        status:'New',
        createAt:new Date()
      }))
    )
  }
  onSubmit(){
    console.log(this.articleForm.value)
    this.articleForm.reset()
  }
}
