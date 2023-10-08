import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import Contact from "./pages/Contact"
import CartPage from "./pages/CartPage"
import RouteNotFound from "./pages/RouteNotFound"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cartpage" element={<CartPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
