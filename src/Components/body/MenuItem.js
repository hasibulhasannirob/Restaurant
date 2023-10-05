import React from "react";
import {
  Card,
  CardImgOverlay,
  CardText,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";

const MenuItem = ({ dish }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "20px",
        
      }}
      color="dark"
    >
      <img alt="Sample" src={dish.image} />
      <CardBody>
        <CardTitle tag="h5" style={{color: "#fcfcfc"}}> {dish.name} </CardTitle>
        <CardTitle tag="h6" style={{color: "#11db07"}}>
            BDT {dish.price} 
        </CardTitle>
        <CardText style={{color: "#b9bdb9"}}>{dish.description}</CardText>
        <Button color="warning">Button</Button>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
