import { useState } from "react";
import { FormLayout } from "../../layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerCaptain } from "../../services/CaptainServices";

const CaptainSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    capacity: "",
    vehicleType: "",
    vehicleColor: "",
    registrationNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const linkActions = {
    to: "/captain-login",
    linkPrefix: "Already a Captain?",
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
        vehicle: {
          color: formData.vehicleColor,
          plate: formData.registrationNumber,
          capacity: formData.capacity,
          vehicleType: formData.vehicleType,
        },
      };
      const response = await registerCaptain(payload);
      if (response?.token) {
        localStorage.setItem("accessToken", response.token);
      }
      toast.success("Captain Registered successfully");
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
      buttonLabel={loading ? "Getting things ready" : "Sign Up"}
      handleSubmit={handleSubmit}
    >
      <div className="form-group">
        <h3 className="input-label">What's our Captains Name?</h3>
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
            className="input-field"
            placeholder="Last Name"
            value={formData.lastName}
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
          value={formData.password}
          className="input-field"
          autoComplete="new-password"
          placeholder="Enter your password"
        />
      </div>
      <div className="form-group">
        <h3 className="input-label">Vehicle Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="vehicleColor"
            onChange={handleChange}
            className="input-field"
            placeholder="Colour"
            autoComplete="new-password"
            value={formData.vehicleColor}
          />
          <input
            type="text"
            onChange={handleChange}
            name="registrationNumber"
            className="input-field"
            placeholder="Reg. Number"
            autoComplete="new-password"
            value={formData.registrationNumber}
          />
          <input
            type="number"
            name="capacity"
            onChange={handleChange}
            className="input-field"
            placeholder="Capacity"
            value={formData.capacity}
            autoComplete="new-password"
          />
          <select
            name="vehicleType"
            onChange={handleChange}
            className="input-field"
            value={formData.vehicleType}
          >
            <option value="">Select vehicle type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>
      </div>
    </FormLayout>
  );
};

export default CaptainSignUp;
