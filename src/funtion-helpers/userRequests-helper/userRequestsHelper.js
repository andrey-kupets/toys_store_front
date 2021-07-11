import { userService } from "../../services";

const getUsers = async () => {
  const users = await userService.getUsers();
  console.log(users);
};

const getUserById = async (userId) => {
  const user = await userService.getUserById(userId);
  console.log(user);
};

const createUser = async () => {
  const createdUserResponse = await userService.createUser();
  console.log(createdUserResponse);
};

export {
  getUsers,
  getUserById,
  createUser,
};
