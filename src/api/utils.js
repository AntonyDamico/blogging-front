export const createBasicToken = ({ username, password }) => {
  const toEncode = `${username}:${password}`;
  return btoa(toEncode);
};

export default { createBasicToken };
