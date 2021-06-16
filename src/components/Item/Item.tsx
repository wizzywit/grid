import React from "react";
import { Styles } from "./Item.style";

type ItemProps = {
  shape: string;
  color: string;
};
const Item: React.FC<ItemProps> = ({ shape, color }) => {
  return (
    <Styles.Container color={color}>
      <div className={`${shape}`}></div>
    </Styles.Container>
  );
};

export default Item;
