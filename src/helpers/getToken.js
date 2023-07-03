import { getEnvVariables } from "./getEnvVariables";
const { VITE_LOGIN } = getEnvVariables();

export const getToken = async (email, password) => {
  try {
    const response = await fetch(VITE_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}. ${response.statusText}`);
    }

    const data = await response.json();
    const token = data.token;
    return token;
  } catch (error) {
    throw new Error(error);
  }
};
