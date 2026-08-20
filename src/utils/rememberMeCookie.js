// Builds and reads the "remember me" cookie, which stores just
// enough state (user id, role) to skip the login form on return
// visits, without needing a database lookup on every request.

export function buildRememberMeCookie(userId, role) {
  const value = JSON.stringify({ userId, role });
  return { name: 'remember_me', value, maxAge: 60 * 60 * 24 * 30 };
}

export function readRememberMeCookie(cookieValue) {
  return JSON.parse(cookieValue);
}