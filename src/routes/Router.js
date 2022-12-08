import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import { Produto } from "../components/Produto"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="/profile/:name" element={< ProfilePage/>} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/product/:id" element={<Produto />} />
            </Routes>
        </BrowserRouter>
    )
}