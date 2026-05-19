import { FormLayout } from "../../layout";

const UserLogin = () => {
  const footerActions = {
    label: "SignIn as Captain",
  };

  const linkActions = {
    to: "/user-signup",
    linkPrefix: "Don't have an account?",
    label: "Create new Account",
  };

  return (
    <FormLayout buttonLabel="Login" footer={footerActions} link={linkActions}>
      <div className="form-group">
        <h3 className="input-label">What is your email?</h3>
        <input
          type="email"
          autoComplete="new-password"
          className="input-field"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <h3 className="input-label">Enter Password</h3>
        <input
          type="password"
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your password"
        />
      </div>
    </FormLayout>
  );
};

export default UserLogin;
