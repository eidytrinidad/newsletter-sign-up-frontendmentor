export interface ProductListModel {
  text: string;
  img: string;
}

export interface ProductListModelDetails {
  ListSection: ProductListModel[] | undefined;
}
