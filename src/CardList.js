import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        first_name={robots[i].first_name}
        last_name={robots[i].last_name}
      />
    );
  });
  return <div>{cardComponent}</div>;
};
export default CardList;
