import { useState } from "react";
import { FormLayout } from "../../layout";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [capacity, setCapacity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const linkActions = {
    to: "/captain-login",
    linkPrefix: "Already a Captain?",
    label: "Sign In here",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      firstName,
      lastName,
      capacity,
      vehicleType,
      vehicleColor,
      registrationNumber,
    };
    console.log(formData);
  };

  return (
    <FormLayout
      link={linkActions}
      buttonLabel="Sign Up"
      handleSubmit={handleSubmit}
    >
      <div className="form-group">
        <h3 className="input-label">What's our Captains Name?</h3>
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
      <div className="form-group">
        <h3 className="input-label">Vehicle Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={vehicleColor}
            className="input-field"
            placeholder="Colour"
            autoComplete="new-password"
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <input
            type="text"
            value={registrationNumber}
            className="input-field"
            placeholder="Reg. Number"
            autoComplete="new-password"
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
          <input
            type="number"
            value={capacity}
            className="input-field"
            placeholder="Capacity"
            autoComplete="new-password"
            onChange={(e) => setCapacity(e.target.value)}
          />
          <select
            value={vehicleType}
            className="input-field"
            onChange={(e) => setVehicleType(e.target.value)}
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
