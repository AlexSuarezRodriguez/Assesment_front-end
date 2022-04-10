import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HOME_ROUTE, PRODUCT_DETAILS, ABOUT}from "../../Constants/Routes"
import Navbar from "../NavBar";


function Mainrouter () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element="{<Home />} "/>
        <Route path={PRODUCT_DETAILS} element="{<CreatePerson />}" />
        <Route path={ABOUT} element="{alexander}" />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainrouter;