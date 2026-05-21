import api from "../../api";

const registerUser = async (data) => {
  try {
    const response = await api.post("/users/register", data);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

const loginUser = async (data) => {
  try {
    const response = await api.post("/users/login", data);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

const getProfile = async () => {
  try {
    const response = await api.get("/users/profile");
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

const logOutUser = async () => {
  try {
    const response = await api.get("/users/logout");
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

export { registerUser, loginUser, getProfile, logOutUser };
