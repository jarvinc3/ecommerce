import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Product } from "../pages/Product"
import { Cart } from "../pages/Cart"
import { Dashboard } from "../pages/Dashboard"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/producto/:id" element={<Product />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}
