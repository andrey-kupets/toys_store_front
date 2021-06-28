import './App.css';
import { useEffect } from "react";
import { productService, userService } from "./services";
import { BaseLayout } from "./layouts";
import { Home } from "./views";

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

function App() {
  // useEffect(() => {
  //   createUser();
  //   getUsers();
  //   getUserById("60d8f6b51127ae1df05ccf8f");
  //   getProducts();
  //   getProductById('60b231505d469ae5fefc2de8');
  // }, []);

  return (
    <BaseLayout>
      <Home/>
    </BaseLayout>
  );
}

export default App;
