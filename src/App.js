import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";

import Products from "./pages/Products";
import ViewProduct from "./pages/ViewProduct";

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
              {/* <Products /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
