import React from 'react'
import './Nav.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
                <span className="logo">create-react-app Demo Lets Grow More Internship Task 2</span>
                <button onClick={getData}>Show Users</button>
            </div>
        </nav>
    )
}