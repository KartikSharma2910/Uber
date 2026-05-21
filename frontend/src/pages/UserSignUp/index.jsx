import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "../../layout";
import { registerUser } from "../../services/UserServices";

const UserSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const footerActions = {
    to: "/captain-signup",
    buttonColor: "#21913f",
    label: "Become a Captain",
  };

  const linkActions = {
    to: "/user-login",
    linkPrefix: "Already have an account?",
    label: "Sign In here",
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
      const payload = {
        email: formData.email,
        password: formData.password,
        fullName: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      };
      const response = await registerUser(payload);
      if (response?.token) {
        localStorage.setItem("accessToken", response.token);
      }
      toast.success("User Registered successfully");
      navigate("/");
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Login failed";
      toast.error(message);
    } finally {
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      });
      setLoading(false);
    }
  };

  return (
    <FormLayout
      showConcent
      link={linkActions}
      buttonLabel={loading ? "Getting things ready" : "Sign Up"}
      footer={footerActions}
      handleSubmit={handleSubmit}
    >
      <div className="form-group">
        <h3 className="input-label">What's your name?</h3>
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="input-field"
            placeholder="First Name"
            value={formData.firstName}
            autoComplete="new-password"
          />
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            className="input-field"
            placeholder="Last Name"
            autoComplete="new-password"
          />
        </div>
      </div>
      <div className="form-group">
        <h3 className="input-label">What's your email?</h3>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <h3 className="input-label">Enter Password</h3>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="input-field"
          value={formData.password}
          autoComplete="new-password"
          placeholder="Enter your password"
        />
      </div>
    </FormLayout>
  );
};

export default UserSignUp;
