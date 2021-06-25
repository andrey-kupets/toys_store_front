import './App.css';
import {HeaderBlock} from "./components/header/HeaderBlock";
import {MainBlock} from "./components/main/MainBlock";
import {FooterBlock} from "./components/footer/FooterBlock";
import {UserService} from "./services/UserService";
import {useEffect} from "react";
import {ProductService} from "./services";

function App() {
    useEffect(() => {
        UserService().then(r => console.log(r));
        ProductService().then(r => console.log(r));
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
