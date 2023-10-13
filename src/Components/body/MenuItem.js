import React from "react";
import "../../Stylesheets/MenuItem.css";
import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <Card
      className="MenuItem"
      style={{
        width: "18rem",
        margin: "20px",
      }}
      color="dark"
      onClick={() => onSelectDish(dish)}
    >
      <img alt="Sample" src={dish.image} />
      <CardBody>
        <CardTitle tag="h5" style={{ color: "#fcfcfc" }}>
          {" "}
          {dish.name}{" "}
        </CardTitle>
        <CardTitle tag="h6" style={{ color: "#11db07" }}>
          BDT {dish.price}
        </CardTitle>
        <CardText style={{ color: "#b9bdb9" }}>{dish.category}</CardText>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
