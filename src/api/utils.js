export const createBasicToken = ({ username, password }) => {
  const toEncode = `${username}:${password}`;
  return btoa(toEncode);
};

export const getErrorMessage = (response) => {
  const key = Object.keys(response)[0];
  let errorMessage = response[key];
  if (Array.isArray(errorMessage)) errorMessage = errorMessage.join(', ');
  return `${key}: ${errorMessage}`;
};
