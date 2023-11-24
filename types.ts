export interface Billboard {
  id: string;
  lbael: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
