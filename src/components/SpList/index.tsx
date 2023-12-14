import React from "react";
import "./index.css";
import SpListItem from "../SpListItem/index";
import { SpListProps } from "../../type";

const SpList: React.FC<SpListProps> = (props) => {
  const propsValue = props;
  return (
    <>
      <div className="shopping-list">
        {propsValue.listData.map((item) => (
          <SpListItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default SpList;
