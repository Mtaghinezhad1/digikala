import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product"
import SabadeKharid from "./page/SabadeKharid";
import SignUp from "./page/SignUp";
import PageWrapper from './component/PageWrapper';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageWrapper><Home/></PageWrapper>}></Route>
                    <Route path="/product/:id" element={<PageWrapper><Product/></PageWrapper>}></Route>
                    <Route path="/sabadekharid" element={<PageWrapper><SabadeKharid/></PageWrapper>}></Route>

                    <Route path="/signup" element={<SignUp />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing