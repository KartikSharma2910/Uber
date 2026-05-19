import { Route, Routes } from "react-router-dom";
import {
  CaptainLogin,
  CaptainSignUp,
  Home,
  UserLogin,
  UserSignUp,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
    </Routes>
  );
};

export default App;
