import User from "./model.js";

export const userDao = async () => {
  return await User.findAll();
};
