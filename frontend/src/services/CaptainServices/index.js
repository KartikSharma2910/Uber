import api from "../../api";

const registerCaptain = async (data) => {
  try {
    const response = await api.post("/captains/register", data);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

const loginCaptain = async (data) => {
  try {
    const response = await api.post("/captains/login", data);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

const getCaptainProfile = async () => {
  try {
    const response = await api.get("/captains/profile");
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

const logOutCaptain = async () => {
  try {
    const response = await api.get("/captains/logout");
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );

    throw error.response?.data || error;
  }
};

export { registerCaptain, loginCaptain, getCaptainProfile, logOutCaptain };
