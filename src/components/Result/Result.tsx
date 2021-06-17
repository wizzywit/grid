import React, { useContext } from "react";
import { Styles } from "./Result.style";
import Item from "../Item/Item";
import AuthContext from "../../context/AuthContext";

const Result = () => {
  const { data } = useContext(AuthContext);
  return (
    <Styles.ResultContainer>
      {data?.map((datum, i) => (
        <Item key={i} shape={datum.shape} color={datum.color} />
      ))}
    </Styles.ResultContainer>
  );
};

export default Result;
