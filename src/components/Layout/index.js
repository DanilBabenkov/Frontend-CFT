import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    const authorised = Boolean(token && token.length && user_id && user_id.length);

    if (authorised)
        return (
            <div className="App">
                <Header></Header>
                {children}
                <Footer></Footer>
            </div>
        )
    else
        return (
            <div className="App">
                {children}
            </div>
        )
}
