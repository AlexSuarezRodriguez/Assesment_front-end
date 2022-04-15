import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME_ROUTE, PRODUCT_DETAILS, ABOUT } from '../../Constants/Routes';
import Navbar from '../NavBar';
import Home from '../../page/Home';
import Perfil from '../../page/Perfil';
import ProductDetails from '../../page/ProductDetails';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={`${PRODUCT_DETAILS}/:id`} element={<ProductDetails />} />
        <Route path={ABOUT} element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
