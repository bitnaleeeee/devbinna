import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";


const Router = () => {
    return (
        <BrowserRouter>
            <div className="page-wrap">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Router;

