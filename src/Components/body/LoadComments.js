import React from "react";
import { Card, CardText, CardTitle, CardBody } from "reactstrap";
import dateFormat from "dateformat";

const LoadComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Card
              className="my-2"
              color="dark"
              inverse
              style={{
                width: "100%",
                textAlign: "left",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{comment.author}</CardTitle>
                <CardText>{comment.comment}</CardText>
                <CardText>Rating: {comment.rating}</CardText>
                <CardText>
                  {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                </CardText>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default LoadComments;
