const getUserEmail = state => state.auth.user.email;
const getIsAuthenticated = state => Boolean(state.auth.token);

export default {
  getIsAuthenticated,
  getUserEmail,
};
