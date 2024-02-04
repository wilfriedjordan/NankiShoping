import { Component,OnInit } from '@angular/core';
import { Article } from '../../../article/Models/article.model';
import { ArticleService } from '../../../article/services/article.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  articles!: Article[];
  aticleSlider!:Article[];
  userEmail!:string
  constructor(private articleService:ArticleService){}
  ngOnInit(): void {
    this.articles=this.articleService.getAllArticles();
    this.aticleSlider=this.articleService.articleslider();

    //Filtrage des articles
    const filter_All =document.querySelector('.filter_All')
    if (filter_All) {
      filter_All.addEventListener('click', (e:Event) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        if(element.classList) {
          element.classList.add('active');
          element.classList.add('transition');
        }
        const allOngles = document.querySelectorAll('.ongles')
        for(let i = 0; i < allOngles.length; i++){
          if(allOngles[i] !== element){
            allOngles[i].classList.remove('active');
          }
        }
          this.articles = this.articleService.getAllArticles();
      })
    }
    const filter_mens =document.querySelector('.filter_mens')
    if(filter_mens){
      filter_mens.addEventListener('click', (e:Event) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        if(element.classList) {
          element.classList.add('active');
        }
        const allOngles = document.querySelectorAll('.ongles')
        for(let i = 0; i < allOngles.length; i++){
          if(allOngles[i] !== element){
            allOngles[i].classList.remove('active');
          }
        }
        const allArticles = this.articleService.getAllArticles();
        this.articles = allArticles.filter((article) => {
          return article.categories ==='mens'
        })
      })
    }
    const filter_womens =document.querySelector('.filter_womens')
    if(filter_womens){
      filter_womens.addEventListener('click', (e:Event) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        if(element.classList) {
          element.classList.add('active');
        }
        const allOngles = document.querySelectorAll('.ongles')
        for(let i = 0; i < allOngles.length; i++){
          if(allOngles[i] !== element){
            allOngles[i].classList.remove('active');
          }
        }
        const allArticles = this.articleService.getAllArticles();
        this.articles = allArticles.filter((article) => {
          return article.categories === 'womens'
        })
      })
    }
    const filter_accesories =document.querySelector('.filter_accesories')
    if(filter_accesories){
      filter_accesories.addEventListener('click', (e:Event) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        if(element.classList) {
          element.classList.add('active');
        }
        const allOngles = document.querySelectorAll('.ongles')
        for(let i = 0; i < allOngles.length; i++){
          if(allOngles[i] !== element){
            allOngles[i].classList.remove('active');
          }
        }
        const allArticles = this.articleService.getAllArticles();
        this.articles = allArticles.filter((article) => {
          return article.categories === 'accessories'
        })
      })
    }

    //Creation du Compte A Rebout
    const jour = document.querySelector('.jour')
    const heure = document.querySelector('.heure')
    const minute = document.querySelector('.minute')  as HTMLElement
    const seconde = document.querySelector('.seconde')
    function compteRebout(){
      const dateActuelle = new Date().getTime()
      const dateFin = new Date('2024-01-30').getTime()
      //dateFin.setDate(dateActuelle.getDate() + (5-dateActuelle.getDay()+7) %7)
      const distance = dateFin - dateActuelle
      const dayRESTANT = Math.floor(distance /(1000*60*60*24))
      const house = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
      const minuteRestant = Math.floor((distance%(1000*60*60))/(1000*60))
      const second = Math.floor((distance%(1000*60))/(1000))
      if(jour){
      jour.innerHTML = `${dayRESTANT}`
      }
      if(heure){
      heure.innerHTML = `${house}`
      }
      if(seconde){
      seconde.innerHTML = `${second}`
      }
      if(minute){
      minute.innerHTML = `${minuteRestant}`
      }
    }
    setInterval(() => {
      compteRebout()
    },1000)
    //Creation du Slider des Articles
    const carousel = document.querySelector('.carousel')
    const wrapper = document.querySelector('.wrapper') as HTMLElement
    const direction_btn = document.querySelectorAll('.wrapper > p ')
    direction_btn.forEach(index =>{
      index.addEventListener('click', (e:Event)=>{
        const element = e.target as HTMLElement
        if(element && carousel && wrapper){
          if(element.id =='direction_right'){
            const widthScroll = wrapper.offsetWidth
            carousel.scrollLeft += widthScroll / 2
          }else if(element.id =='direction_left'){
            const widthScroll = wrapper.offsetWidth
            carousel.scrollLeft -= widthScroll/2
          }
        }
      })
    })
  }
    //Enregistrer pour la newsletter
    ngSubmit(form:NgForm){
      return form.value
    }
}
