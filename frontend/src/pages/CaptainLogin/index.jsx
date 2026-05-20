import { useState } from "react";
import { FormLayout } from "../../layout";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({ email: "", password: "" });

  const footerActions = {
    to: "/user-login",
    buttonColor: "#f3c164",
    label: "SignIn as User",
  };

  const linkActions = {
    to: "/captain-signup",
    linkPrefix: "Join the fleet?",
    label: "Register as Captain",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
    console.log(captainData);
  };

  return (
    <FormLayout
      link={linkActions}
      buttonLabel="Login"
      footer={footerActions}
      handleSubmit={handleSubmit}
    >
      <div className="form-group">
        <h3 className="input-label">What is your email?</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
          className="input-field"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <h3 className="input-label">Enter Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your password"
        />
      </div>
    </FormLayout>
  );
};

export default CaptainLogin;
