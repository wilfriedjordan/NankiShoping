export class Article {
  public id!: number;
  public title!: string;
  public description!: string;
  public image!: string;
  public price!: number;
  public status?:string
  public createAt!:Date;
  public like!:number
  public categories!:string
  public pricePromotion?:number;
  public poucentageReduction?:number;
  public likesnap?:string

}
