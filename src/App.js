import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { SignIn } from './components/signin/SignIn';
import { Signup } from './components/signup/Signup';
import { Products } from './components/product/Products';
import ProductDetails from './components/product/ProductDetails';
import OrderProcess from './components/order/OrderProcess';
import Address from './components/order/Address';
import ConfirmOrder from './components/order/ConfirmOrder';

function App() {
  return (
    <>
      <Router>

        <Header show1={false}/>  
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/login" element={<SignIn />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products-details/:productId" element={<ProductDetails />} />

          <Route path="/order-process/:productId/:quantityToOrder" element={<OrderProcess />} />

          <Route path="/select-address/:productId/:quantityToOrder" element={<Address />} />

          <Route path="/confirm-order/:productId/:quantityToOrder" element={<ConfirmOrder />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
