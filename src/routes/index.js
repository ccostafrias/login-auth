import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />}/>
                    <Route path="/" element={<Signin />}/>
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route path="*" element={<Signin/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

function Private({ Item }) {
    const { signed } = useAuth()
    return signed ? <Item /> : <Signin />
}