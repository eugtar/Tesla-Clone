// import components
import PagesTemplate from "../components/PagesTemplate";

const SignIn = () => {
  return (
    <PagesTemplate
      title="Sign In"
      to="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US"
      className=""
    />
  );
};

export default SignIn;
