import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from 'axios'

const VerificationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

//   const userLogin = useSelector((state) => state.userLogin);
//   const {isVerified} = userLogin.userInfo;

  const params = useParams();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put(`/api/users/verify-email/${params.verificationString}`);
        
        setLoading(false);
        setSuccess(true);

        console.log('inside axios');

      } catch (error) {
        setSuccess(false);
        setLoading(false);
        console.log(error.message);
      }
    };

    loadVerification();
  }, [params]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : success ? (
        <div>
          Your Email has been verified successfully
          <Link to={"/"}>Go to Home Page</Link>
        </div>
      ) : (
        <div>Your Email failed to Verify</div>
      )}
    </>
  );
};

export default VerificationScreen;
