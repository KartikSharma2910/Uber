import { Route, Routes } from "react-router-dom";
import {
  CaptainLogin,
  CaptainSignUp,
  Home,
  UserLogin,
  UserSignUp,
  LandingPage,
  ProtectedRoute,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
