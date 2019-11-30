export const TOKEN_KEY = "jwt_token";
export const API_URL = "https://rds-backend.herokuapp.com";

export const isAuthenticated = () => {
  if (sessionStorage.getItem(TOKEN_KEY) !== null) {
    return true;
  }
  return false;
};

export const getToken = sessionStorage.getItem(TOKEN_KEY);