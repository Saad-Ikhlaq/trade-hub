import { googleLogout } from "@react-oauth/google";

const Logout = () => {
  const clientId =
    "824582615462-8o9sr8q9bp0efm2c87godlgurk9enqr3.apps.googleusercontent.com";

  const logoutSuccessHandler = () => {
    console.log("Logout Successful");
  };

  return (
    <div className="logOutButton">
      <googleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logoutSuccessHandler}
      />
    </div>
  );
};

export default Logout;
