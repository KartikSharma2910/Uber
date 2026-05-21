import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "../../layout";
import { loginUser } from "../../services/UserServices";

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

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

  const validate = () => {
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    try {
      setLoading(true);
      const response = await loginUser(formData);
      if (response?.token) {
        localStorage.setItem("accessToken", response.token);
      }
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Login failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout
      link={linkActions}
      footer={footerActions}
      handleSubmit={handleSubmit}
      buttonLabel={loading ? "Logging in..." : "Login"}
    >
      <div className="form-group">
        <h3 className="input-label">What is your email?</h3>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          className="input-field"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <h3 className="input-label">Enter Password</h3>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          className="input-field"
          placeholder="Enter your password"
        />
      </div>
    </FormLayout>
  );
};

export default UserLogin;
