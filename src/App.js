import './App.css';
import {HeaderBlock} from "./components/header/HeaderBlock";
import {MainBlock} from "./components/main/MainBlock";
import {FooterBlock} from "./components/footer/FooterBlock";
import {UserService} from "./services/UserService";
import {useEffect} from "react";
import {productService} from "./services";

function App() {
    useEffect(() => {
        // UserService().then(r => console.log(r));
        productService.getProducts().then(r => console.log(r));
        productService.getProductById("60b231505d469ae5fefc2de8").then(r => console.log(r));
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
