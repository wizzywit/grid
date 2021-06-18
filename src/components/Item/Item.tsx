import React from "react";
import { Styles } from "./Item.style";

export type ItemProps = {
  shape: string;
  color: string;
};
const Item: React.FC<ItemProps> = ({ shape, color }) => {
  return (
    <Styles.Container color={color} data-testid="item">
      <div className={`${shape}`} data-testid="shape" data-shape={shape}></div>
    </Styles.Container>
  );
};

export default Item;
