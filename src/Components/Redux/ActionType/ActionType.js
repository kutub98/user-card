export const allUser = (users) => ({
  type: "ALL_USERS",
  payload: users,
});
export const addUser = (newUser) => ({
  type: "ADD_USER",
  payload: newUser,
});
