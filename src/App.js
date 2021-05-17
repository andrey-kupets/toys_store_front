import logo from './logo.svg';
import './App.css';
import {HeaderBlock} from "./components/header/HeaderBlock";
import {MainBlock} from "./components/main/MainBlock";
import {FooterBlock} from "./components/footer/FooterBlock";

function App() {
  return (
    <div className="App">
      <HeaderBlock/>
      <MainBlock/>
      <FooterBlock/>
    </div>
  );
}

export default App;
