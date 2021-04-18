import React from "react";
import { Button, Card } from "react-bootstrap";

const FeaturesSingleCard = ({ feature }) => {
  const { icon, title, description } = feature;
  return (
    <Card className="m-2">
      <Card.Img style={{height: '100px', width: '100px'}} variant="top" src={icon} className="mx-auto my-2" />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer
        style={{ background: "none", border: "none", textAlign: "center" }}
      >
        <Button variant="light">READ MORE {">"} </Button>
      </Card.Footer>
    </Card>
  );
};

export default FeaturesSingleCard;
