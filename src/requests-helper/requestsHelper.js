import { productService, userService } from "../services";

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

const getProducts = async () => {
  const products = await productService.getProducts();
  console.log(products);
};

const getProductById = async (productId) => {
  const product = await productService.getProductById(productId);
  console.log(product);
};

export {
  getUsers,
  getUserById,
  createUser,
  getProducts,
  getProductById,
};
