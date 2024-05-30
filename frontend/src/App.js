import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VerificationScreen from "./screens/VerificationScreen";
import PleaseVerifyEmailScreen from "./screens/PleaseVerifyEmailScreen";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <div className="app-container">
      <div>
        <GoogleOAuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route
                path="/admin/productList"
                element={<ProductListScreen />}
              />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="/admin/userList" element={<UserListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route path="/admin/orderList" element={<OrderListScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} exact />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/search/:keyword" element={<HomeScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route
                path="/verify-email/:verificationString"
                element={<VerificationScreen />}
              />
              <Route
                path="/please-verify"
                element={<PleaseVerifyEmailScreen />}
              />
              <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
          </Router>
        </GoogleOAuthProvider>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
