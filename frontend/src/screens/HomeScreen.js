import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message.js";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import { ORDER_DETAILS_RESET } from "../constants/orderConstants";

const HomeScreen = () => {
  const params = useParams();
  const keyword = params.keyword;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, products } = productList;
  const { userInfo } = userLogin;
  const { isVerified } = userInfo || false;

  console.log(isVerified);

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch({ type: ORDER_DETAILS_RESET })
  }, []);

  return (
    <>
      <Container className="py-3 home-screen-container">
        {userInfo && !isVerified && (
          <Message variant="danger">Please Verify Your Email</Message>
        )}
        <h1>welcome to Trade Hub</h1>
        {!keyword && <ProductCarousel />}
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger" text={error} />
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
