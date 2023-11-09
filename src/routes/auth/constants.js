export const ROLES = {
  GUEST: "guest",
  USER: "user",
};
export const isGuest = (user) => user.role === ROLES.GUEST;
export const isUser = (user) => user.role === ROLES.USER;
export const isAllowed = (user, allowedRoles) =>
  allowedRoles.includes(user.role);
