export const generateMockToken = (email) => {
  return `mock-jwt-token-for-${email}`;
};

export const saveSession = (user, token) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/admin';
};