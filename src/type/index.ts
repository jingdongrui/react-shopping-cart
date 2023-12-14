export interface ListItemType {
  id: string;
  name: string;
  price: string;
  imgUrl: string;
  number: number;
}

export interface SpListProps {
  listData: ListItemType[];
}
