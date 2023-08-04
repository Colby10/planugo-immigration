import React from 'react'
import '../css/propos.css';
import Navbar from '../component_app/Navbar';
import ButtonLink from '../component_reuseable/ButtonLink';
import Footer from '../component_app/Footer';




export default function Propos() {
    return (
        <div className=''>
            <Navbar />
            <div className="wrap-propos">
                <div className="container">
                    <h1>Qui sommes nous ?</h1>
                    <p><a href="/">Accueil -</a> A propos</p>
                </div>
            </div>
            <div className="container">
                <div className="main">
                    <div className="intro">
                        <h4>Introduction</h4>
                        <p>
                            PlanUGo a été créer en février 2015 par <strong>Esther FOTSE</strong>. L'idée derrière cette
                            startup était de connecter des passionnés de voyager qui souhaitent découvrir
                            les destinations africaine. C'est au-fur-et-à-mesure de l'évolution dans le business,
                            que nous avons décidé d'ouvrir un volet immigration car contactés par plusieurs 
                            personnes désireuses d'immigrer en occident. <br />
                        </p>
                    </div>
                    <div className="mission">
                        <h4>Notre mission</h4>
                        <p>- <strong>Accompagner</strong></p>
                        <p>- <strong>Offrir des services distinctifs</strong></p>
                        <p>- <strong>Faciliter la mise en œuvre de programmes d'immigration au Canada</strong></p>
                    </div>
                    <div className="team">
                        <h4>L'equipes</h4>
                        <p className='fw-bold'>
                            Une équipe de passionnés travaille au quotidien pour mener à bien ce projet dont 
                            l'objectif principale est d'avoir un maximun d'impact positif sur la vie des personnes.
                        </p>
                        <div className="row g-4 mt-3">
                            <div className="col-md-6">
                                <div className="team1">
                                    <div className="divimg">
                                        <img src={"./team/ceo.jpg"} className='img-fluid' alt="" />
                                    </div>
                                    <div className="description">
                                        <h5>Esther Fotse</h5>
                                        <strong>CEO</strong>
                                        <hr />
                                        <div className="social">
                                            <ButtonLink className="btn btn-sm facebook"
                                                href="https://web.facebook.com/reinesther"
                                                icon={<i className="fa-brands fa-facebook"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm whatsapp"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-whatsapp"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm telegram"
                                                href="https://t.me/immigrationbyplanugo"
                                                icon={<i class="fa-brands fa-telegram"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team1">
                                    <div className="divimg">
                                        <img src={"./team/team.png"} className='img-fluid' alt="" />
                                    </div>
                                    <div className="description">
                                        <h5>Bethe Ndenga</h5>
                                        <strong>Assistance</strong>
                                        <hr />
                                        <div className="social">
                                            <ButtonLink className="btn btn-sm facebook"
                                                href="https://web.facebook.com/berthe.ndenga.7"
                                                icon={<i className="fa-brands fa-facebook"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm whatsapp"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-whatsapp"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm telegram"
                                                href="https://t.me/immigrationbyplanugo"
                                                icon={<i class="fa-brands fa-telegram"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team1">
                                    <div className="divimg">
                                        <img src={"./team/team.png"} className='img-fluid' alt="" />
                                    </div>
                                    <div className="description">
                                        <h5>Olga </h5>
                                        <strong>Assistante</strong>
                                        <hr />
                                        <div className="social">
                                            <ButtonLink className="btn btn-sm facebook"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-facebook"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm whatsapp"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-whatsapp"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm telegram"
                                                href="https://www.google.com"
                                                icon={<i class="fa-brands fa-telegram"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team1">
                                    <div className="divimg">
                                        <img src={"./team/team.png"} className='img-fluid' alt="" />
                                    </div>
                                    <div className="description">
                                        <h5>Junior</h5>
                                        <strong>Assistant</strong>
                                        <hr />
                                        <div className="social">
                                            <ButtonLink className="btn btn-sm facebook"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-facebook"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm whatsapp"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-whatsapp"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm telegram"
                                                href="https://www.google.com"
                                                icon={<i class="fa-brands fa-telegram"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team1">
                                    <div className="divimg">
                                        <img src={"./team/team.png"} className='img-fluid' alt="" />
                                    </div>
                                    <div className="description">
                                        <h5>Darelle</h5>
                                        <strong>Dévévoloppeur web</strong>
                                        <hr />
                                        <div className="social">
                                            <ButtonLink className="btn btn-sm facebook"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-facebook"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm whatsapp"
                                                href="https://www.google.com"
                                                icon={<i className="fa-brands fa-whatsapp"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                            <ButtonLink
                                                className="btn btn-sm telegram"
                                                href="https://www.google.com"
                                                icon={<i class="fa-brands fa-telegram"></i>}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
