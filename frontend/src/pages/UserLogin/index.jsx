import { useState } from "react";
import { FormLayout } from "../../layout";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ email: "", password: "" });

  const footerActions = {
    to: "/captain-login",
    buttonColor: "#21913f",
    label: "SignIn as Captain",
  };

  const linkActions = {
    to: "/user-signup",
    linkPrefix: "Don't have an account?",
    label: "Create new Account",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ email, password });
    console.log(data);
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

export default UserLogin;
