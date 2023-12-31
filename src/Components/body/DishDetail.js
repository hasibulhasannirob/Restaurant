import React from "react";
import {
  Card,
  CardText,
  CardImg,
  CardTitle,
  CardBody,
  Button,
} from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";

const DishDetail = ({ dish }) => {
  return (
    <div>
      <Card className="my-2">
        <CardImg
          src={dish.image}
          style={{
            height: 300,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <Button color="warning">Order Now</Button>
          <CardTitle
            style={{
              marginTop: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Comments
          </CardTitle>
          <LoadComments comments={dish.comments} />
          <hr/>
          <CommentForm dishId={dish.id}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
