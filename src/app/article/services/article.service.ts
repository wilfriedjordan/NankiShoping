import { Injectable } from "@angular/core";
import { Article } from "../Models/article.model";
import { Observable,of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      title: "Élégance",
      description: "Capturez l'essence des années passées avec notre moderne.",
      image: "../../../assets/Image/article/product_1.png",
      price: 100,
      status: "New",
      createAt: new Date(),
      like: 3,
      categories:'mens',
      pricePromotion: 100,
      poucentageReduction: 5
    },
    {
      id: 2,
      title: "Sac Aero Tech",
      description: "Immergez-vous dans le style bohème avec notre collection ",
      image: "../../../assets/Image/article/product_2.png",
      price: 50,
      status: "New",
      categories:'accessories',
      createAt: new Date(),
      like: 250,
    },
    {
      id: 3,
      title: "Élégance",
      description: "Soyez à la mode avec notre look sophistiqué q",
      image: "../../../assets/Image/article/product_3.png",
      price: 100,
      status: "Sale",
      createAt: new Date(),
      like: 10,
      categories:'  wommens',
      pricePromotion: 100,
      poucentageReduction: 2
    },
    {
      id: 4,
      title: "Sac Aero Tech",
      description: "Capturez l'essence des années passées avec moderne.",
      image: "../../../assets/Image/article/product_4.png",
      price: 200,
      createAt: new Date(),
      categories:'accessories',
      like: 200,
      pricePromotion: 100,
      poucentageReduction: 3
    },
    {
      id: 5,
      title: "UrbanThread",
      description: "Plongez dans le raffinement avec cette robe parisienne.",
      image: "../../../assets/Image/article/product_1.png",
      price: 78,
      createAt: new Date(),
      like: 10,
      pricePromotion: 100,
      categories:'mens',

      poucentageReduction: 5
    },
    {
      id: 6,
      title: "VelvetVogue",
      description: "Soyez à la mode avec notre collection ",
      image: "../../../assets/Image/article/product_9.png",
      price: 25,
      categories:'mens',
      status: "New",
      createAt: new Date(),
      like: 30,
    },
    {
      id: 7,
      title: "UrbanThread",
      description: "Explorez la modernité avec notre collection",
      image: "../../../assets/Image/article/product_8.png",
      price: 100,
      status: "New",
      categories:'accessories',
      createAt: new Date(),
      like: 10,
    },
    {
      id: 8,
      title: "VelvetV",
      description:"Velvet lorem ipsum dolor sit amet  ",
      image: "../../../assets/Image/article/product_1.png",
      price: 1500,
      createAt: new Date(),
      like: 30,
      categories:'mens',
      pricePromotion: 100,
      poucentageReduction: 5
    },
    {
      id: 9,
      title: "VintageVibes",
      description: "Soyez à la mode avec notre collection ",
      image: "../../../assets/Image/article/product_10.png",
      price: 200,
      status: "Sale",
      categories:'womens',
      createAt: new Date(),
      like: 10,
    },
    {
      id: 10,
      title: "SilkSerenity",
      description: "Soyez à la mode avec notre collection ",
      image: "../../../assets/Image/article/product_10.png",
      price: 150,
      status: "New",
      createAt: new Date(),
      like:800,
      categories:'womens',
      pricePromotion: 100,
      poucentageReduction: 10
    },
    {
      id: 11,
      title: "UrbanRitual",
      description: "Les essentiels de la haute couture prennent ",
      image: "../../../assets/Image/article/product_5.png",
      price: 300,
      createAt: new Date(),
      like: 10,
      categories:'mens',
      pricePromotion: 100,
      poucentageReduction: 10
    },
    {
      id: 12,
      title: "SilkSerenity",
      description: "Les essentiels de la haute couture prennent ",
      image: "../../../assets/Image/article/product_7.png",
      price: 208,
      createAt: new Date(),
      like: 10,
      categories:'womens',
    },
    {
      id: 13,
      title: "CoutureCanvas",
      description: "Les essentiels de la haute couture prennent ",
      image: "../../../assets/Image/article/product_8.png",
      price: 100,
      createAt: new Date(),
      categories:'accessories',
      like: 10,
      pricePromotion: 100,
      poucentageReduction: 8
    },
    {
      id: 14,
      title: "UrbanRitual",
      description: "Les essentiels de la haute couture prennent",
      image: "../../../assets/Image/article/product_4.png",
      price: 306,
      createAt: new Date(),
      like: 10,
      categories:'accessories',
    },
    {
      id: 15,
      title: "Sac à Dos Aero Tech",
      description: "Vivez vos rêves en denim avec  nos produits",
      image: "../../../assets/Image/article/product_3.png",
      price: 150,
      createAt: new Date(),
      like: 10,
      pricePromotion: 100,
      categories:'womens',
      poucentageReduction: 2
    },
    {
      id: 16,
      title: "VintageVibes",
      description: "Les essentiels de la haute couture prennent vie avec cette robe",
      image: "../../../assets/Image/article/product_5.png",
      price: 200,
      createAt: new Date(),
      like: 1000,
      categories:'mens',

    },
    {
      id: 18,
      title: "StreetStyleChic",
      description: "Vivez vos rêves en denim avec ce jean tendance. Confortable  ",
      image: "../../../assets/Image/article/product_6.png",
      price: 150.5,
      createAt: new Date(),
      like: 400,
      pricePromotion: 100,
      poucentageReduction: 6,
      categories:'womens',

    },
    {
      id: 19,
      title: "StreetStyleChic",
      description: "Explorez la modernité avec notre collection UrbanThread. ",
      image: "../../../assets/Image/article/product_9.png",
      price: 100.9,
      createAt: new Date(),
      like: 300,
      categories:'mens',

    },
    {
      id: 20,
      title: "StreetStyleChic",
      description: "Explorez la modernité avec notre collection UrbanThread. ",
      image: "../../../assets/Image/article/product_10.png",
      price: 100.6,
      createAt: new Date(),
      like: 10,
      pricePromotion: 100,
      categories:'womens',
      poucentageReduction: 2
    },
    {
      id: 21,
      title: "TailoredTrims",
      description: "Vivez vos rêves en denim avec ce jean tendance. ",
      image: "../../../assets/Image/article/product_2.png",
      price: 225,
      status: "SALE",
      createAt: new Date(),
      like: 15,
      categories:'accessories',

    },
    {
      id: 22,
      title: "Article 1",
      description: "Vivez vos rêves en denim avec ce jean tendance. ",
      image: "../../../assets/Image/article/product_1.png",
      price: 105,
      createAt: new Date(),
      like: 10,
      pricePromotion: 100,
      categories:'mens',

      poucentageReduction: 1
    },
    {
      id: 23,
      title: "DenimDreams",
      description: "Capturez l'essence des années passées avec notre robe VintageVibes.",
      image: "../../../assets/Image/article/product_3.png",
      price: 300,
      status: "New",
      createAt: new Date(),
      like: 8,
      pricePromotion: 100,
      poucentageReduction: 8,
      categories:'womens',

    },
    {
      id: 24,
      title: "TailoredTrims",
      description: "Capturez l'essence des années passées avec notre robe VintageVibes.",
      image: "../../../assets/Image/article/product_5.png",
      price: 405,
      createAt: new Date(),
      like: 10,
      categories:'mens',

    },
    {
      id: 25,
      title: "CoutureCanvas",
      description: "Capturez l'essence des années passées avec notre robe VintageVibes.",
      image: "../../../assets/Image/article/product_7.png",
      price: 158,
      status: "SALE",
      createAt: new Date(),
      like: 5,
      pricePromotion: 100,
      categories:'womens',

      poucentageReduction: 3
    },
    {
      id: 26,
      title: "BohoBoutique",
      description: "Affirmez votre style urbain avec ce sweat à capuche StreetStyleChic.",
      image: "../../../assets/Image/article/product_9.png",
      price: 155,
      createAt: new Date(),
      like: 200,
      pricePromotion: 100,
      categories:'mens',
      poucentageReduction: 4
    },
    {
      id: 27,
      title: "CoutureCanvas",
      description: "Affirmez votre style urbain avec ce sweat à capuche StreetStyleChic.",
      image: "../../../assets/Image/article/product_10.png",
      price:251,
      status: "New",
      createAt: new Date(),
      like: 100,
      categories:'womens',
      pricePromotion: 100,
      poucentageReduction: 10,
      likesnap:'like'
    },
  ]
  //Mise a jous des areticles dans le Dom
  updateArticle(arry:Article[]){}
  //Recuperation de tout les Articles
  getAllArticles():Article[]  {
    return this.articles;
  }
  //Recuperation d'un Article par Id
  getArticleById(articleId:number):Article{
    const article = this.articles.find(article => article.id === articleId)
    if(article){
      return article;
    }else{
      throw new Error('article not found')
    }
  }
  getProductById(id: number): Observable<Article | undefined> {
    return of(this.articles.find((article) => article.id === id));
  }

    getProductsByCategory(category: string): Observable<Article[]> {
    return of(this.articles.filter((article) => article.categories === category));
  }
  //Article de la meme categories
  onAddLike(id:number){
    const article = this.getArticleById(id)
    article.likesnap ==='like'? article.like ++ : article.like --
  }
  articleslider():Article[]{
    return this.articles.filter(argument => argument.like >= 30);
  }


}
