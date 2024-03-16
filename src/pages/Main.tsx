import "../style/style.css";
import Goods from "../components/Goods";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { Fragment } from "react/jsx-runtime";
const Main = () => {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Goods />
        <Cart />
      </div>
    </Fragment>
  );
};

export default Main;
