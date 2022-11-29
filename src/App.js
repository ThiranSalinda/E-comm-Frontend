import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ViewProduct from "./pages/ViewProduct";
import ManageProducts from "./pages/ManageProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid px-0">
          <Header />

          <div className="container py-4">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<ViewProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/manage" element={<ManageProducts />} />
              {/* <Products /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
