export interface ListItemType {
  id: string;
  name: string;
  price: string;
  imgUrl: string;
}

export interface SpListProps {
  listData: ListItemType[];
}
