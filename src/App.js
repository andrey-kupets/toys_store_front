import './App.css';
import {HeaderBlock} from "./components/header/HeaderBlock";
import {MainBlock} from "./components/main/MainBlock";
import {FooterBlock} from "./components/footer/FooterBlock";
import {useEffect} from "react";
import {productService, userService} from "./services";

const getUsers = async () => {
    const users = await userService.getUsers();
    console.log(users);
}

const getUserById = async (userId) => {
  const user = await userService.getUserById(userId);
  console.log(user);
}

const createUser = async () => {
  const createdUserResponse = await userService.createUser();
  console.log(createdUserResponse);
}

const getProducts = async () => {
  const products = await productService.getProducts();
  console.log(products);
}

const getProductById = async (productId) => {
  const product = await productService.getProductById(productId);
  console.log(product);
}
function App() {
  useEffect(() => {
    createUser();
    getUsers();
    getUserById("60b229625d469ae5fefc2ddc");
    getProducts();
    getProductById("60b231505d469ae5fefc2de8");
  }, [])

  return (
    <div className="App">
      <HeaderBlock/>
      <MainBlock/>
      <FooterBlock/>
    </div>
  );
}

export default App;
