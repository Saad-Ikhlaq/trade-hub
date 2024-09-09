import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="mb-4 rounded product-card">
      <Link to={`/products/${product._id}`}>
        <Card.Img
          style={{
            height: "250px",
            width: "100%",
            // objectFit: "contain",
          }}
          src={product.image}
        />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title
            style={{
              height: "30px",
            }}
          >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div>
            <Rating
              value={product.rating}
              numReviews={product.numReviews}
              color="red"
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
