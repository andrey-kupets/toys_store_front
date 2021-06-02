import './App.css';
import {HeaderBlock} from "./components/header/HeaderBlock";
import {MainBlock} from "./components/main/MainBlock";
import {FooterBlock} from "./components/footer/FooterBlock";
import {Userservice} from "./services/UserService";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        Userservice().then(r => console.log(r));
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
