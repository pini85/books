const getEnvVariable = (varName) => {
  const value = import.meta.env[varName];
  if (!value) {
    throw new Error(`${varName} is not defined in .env file`);
  }
  return value;
};

export const getGoogleBooksUrl = () => {
  return getEnvVariable("VITE_REACT_APP_GOOGLE_API_URL");
};