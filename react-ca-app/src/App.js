import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import Contact from "./pages/Contact"
import CartPage from "./pages/CartPage"
import RouteNotFound from "./pages/RouteNotFound"
import CheckoutSuccess from "./pages/CheckoutSuccess"
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          <Route index element={<Home />} />
          <Route path="productpage/:productId" element={<ProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cartpage" element={<CartPage />} />
          <Route path="*" element={<RouteNotFound />} />
          <Route path="checkoutsuccess" element={<CheckoutSuccess />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
