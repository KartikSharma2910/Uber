import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "../../layout";
import { loginCaptain } from "../../services/CaptainServices";

const CaptainLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await loginCaptain(formData);
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
          autoComplete="new-password"
          className="input-field"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <h3 className="input-label">Enter Password</h3>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your password"
        />
      </div>
    </FormLayout>
  );
};

export default CaptainLogin;
