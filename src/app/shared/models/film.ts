export class Film {
  constructor(
    public id?: string,
    public titre?: string,
    public urlImage?: string,
    public favoris=false,
    public description ?: string,
    
  ) {}
}
