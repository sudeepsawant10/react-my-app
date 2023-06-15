import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

export default function Routing() {
  return (
    <div>
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/about' Component={About}></Route>
                <Route path='/users' Component={Users}></Route>
            </Routes>

        </Router>

    </div>
  )
}

// New Component
function Home() {
    return <h1>Home</h1>
}
function About() {
    return <h1>About</h1>
}
function Users() {
    return <h1>Users</h1>
}