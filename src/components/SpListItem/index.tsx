import React from "react";
import "./index.css";
import { ListItemType } from "../../type";

const SpList: React.FC<ListItemType> = (props) => {
  const propsValue = props;
  return (
    <>
      <div className="shopping-item">
        <div className="shopping-item__img">{propsValue.imgUrl ? <img src={propsValue.imgUrl}></img> : ""}</div>
        <div className="shopping-item__operation">
          <div className="shopping-item__operation--info">
            <div title={propsValue.name}>{propsValue.name}</div>
            <div>{propsValue.price}</div>
          </div>
          <div className="shopping-item__operation--button">
            <button>加入唔唔唔</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpList;
