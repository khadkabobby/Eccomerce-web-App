import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

//components
import { Header, Footer } from "./components";
//pages
import { Home, Contact, Admin, OrderHistory, Cart } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order-history" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
