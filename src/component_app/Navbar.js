import React from 'react'
import '../css/navbar.css'



function Navbar() {


  return (

    <div className="hero-anime sticky-top">
      <div className="navigation-wrap bg-white start-header start-style sticky-top ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-white">
                <a href="/" className="navbar-brand"> 
                  <img src={"/logo/logo.png"}  alt="logo" /> 
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="/">Accueil</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="/canada">Canada</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Nos destinations</a>
                      <div className="dropdown-menu">
                        {/*<a className="dropdown-item" href="/allemagne">Allemagne</a>*/}
                        <a className="dropdown-item" href="/russie">Russie</a>
                        <a className="dropdown-item" href="/bielorussie">Bielorussie</a>
                        <a className="dropdown-item" href="/chypre">Chypre</a>
                        <a className="dropdown-item" href="/moldavie">Moldavie</a>
                        <a className="dropdown-item" href="/serbie">Serbie</a>
                        <a className="dropdown-item" href="/lettonie">Lettonie</a>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">L'entreprise</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/a-propos">A propos</a>
                        <a className="dropdown-item" href="/contact">Contact</a>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="/faq">FAQ ?</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
