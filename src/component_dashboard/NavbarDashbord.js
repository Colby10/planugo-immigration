import React, { useState, useEffect } from 'react'
import '../css/navbar.css';
import { signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../config-files/firebase';
import { auth } from '../config-files/firebase';




export default function NavbarDashbord() {

    const [user, setUser] = useState({});


    const logout = async () => {

        await signOut(auth).then(() => {

            localStorage.removeItem("planugo-user");

            window.location = "/login"

        }).catch((error) => {
            console.log(error.massage);
        });
    };

    const getUserr = async () => {

        const localUser = (JSON.parse(localStorage.getItem("planugo-user") || "null"))

        if (!localUser)
            return

        const refDoc = doc(db, "Admin", localUser.uid)
        const res = await getDoc(refDoc);
        setUser(res.data());

    }

    useEffect(() => {

        getUserr()

    }, [])

    return (
        <div className="hero-anime sticky-top">
            <div className="navigation-wrap bg-white start-header start-style sticky-top ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-white">
                                <a href="/" onClick={e => e.preventDefault()} className="navbar-brand ab">
                                    <img src={"/logo/logo.png"} alt="logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="/dashboard">Offres en ligne</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="/curriculum">Curriculum vitae</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="/nos-clients">Nos clients</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Procedure</a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/procedure-terminer">Procedure terminer</a>
                                                <a className="dropdown-item" href="/rembourssement">Remboursement</a>
                                            </div>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="/contact-dashboard">Contact</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link dropdown-toggle fw-bold" data-toggle="dropdown"
                                                href="/" role="button" aria-haspopup="true" aria-expanded="false">
                                                {user.prenom} <i className="bi bi-person-circle"></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/mon-profil">Mon profil</a>
                                                <button className="dropdown-item text-danger" onClick={logout}>
                                                    <i className="fa-solid fa-right-from-bracket"></i> Deconnexion
                                                </button>
                                            </div>
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
