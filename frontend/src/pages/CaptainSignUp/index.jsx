import { useState } from "react";
import { FormLayout } from "../../layout";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const footerActions = {
    to: "/user-signup",
    buttonColor: "#f3c164",
    label: "Join as a User",
  };

  const linkActions = {
    to: "/captain-login",
    linkPrefix: "Already a Captain?",
    label: "Sign In here",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password, firstName, lastName };
    console.log(formData);
  };

  return (
    <FormLayout
      showConcent
      link={linkActions}
      buttonLabel="Sign Up"
      footer={footerActions}
      handleSubmit={handleSubmit}
    >
      <div className="form-group">
        <h3 className="input-label">What's your name?</h3>
        <div className="flex gap-4">
          <input
            type="text"
            value={firstName}
            className="input-field"
            placeholder="First Name"
            autoComplete="new-password"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            className="input-field"
            placeholder="Last Name"
            autoComplete="new-password"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <h3 className="input-label">What's your email?</h3>
        <input
          type="text"
          value={email}
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <h3 className="input-label">Enter Password</h3>
        <input
          type="password"
          value={password}
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </FormLayout>
  );
};

export default CaptainSignUp;
