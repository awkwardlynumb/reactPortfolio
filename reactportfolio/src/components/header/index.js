import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Matt Pearce</a>
        <ul className="navbar-nav ml-auto flex-row">
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
        </ul>
    </nav>
  )
}

export default Header;