import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PleaseVerifyEmailScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <Container>
    <Card className="text-center">
      <Card.Header>Thanks For Signing Up</Card.Header>
      <Card.Body>
        <Card.Title>A verification Email has been Sent to you. Please verify your Email to Enable Checkout</Card.Title>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default PleaseVerifyEmailScreen;
