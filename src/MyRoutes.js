import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import Home from './components/index';
import Header from './components/header';
import Footer from './components/footer';

const MyRoute = () => (
    <BrowserRouter>
        <Header/>
        <main role="main" className="container">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </main>
    </BrowserRouter>
)

export default MyRoute;