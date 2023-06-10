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
                    <p><a href="/">Acceuil -</a> A propos</p>
                </div>
            </div>
            <div className="container">
                <div className="main">
                    <div className="intro">
                        <h4>Introduction</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex modi quasi corporis quam 
                            molestias tempora enim ad at harum quos nesciunt minus quas, vel quaerat illo eligendi repellat id.
                            Iusto, accusamus id dolores pariatur porro maiores ab voluptatum reiciendis necessitatibus sequi 
                            asperiores ipsam alias natus distinctio sapiente quisquam corrupti blanditiis optio modi ratione 
                            officiis saepe quas. Dolorum, voluptatum tempore.
                            Asperiores dolores quidem ad eveniet! Optio dignissimos accusamus sapiente. Nemo explicabo quae error 
                            eveniet facere aliquam velit iure enim distinctio eos nulla saepe eaque quaerat voluptatem, incidunt 
                            expedita at delectus?
                            Et non ex tempore perspiciatis corrupti, delectus facere fuga modi nihil adipisci fugiat sit odit 
                            inventore, labore voluptatibus recusandae voluptas est neque distinctio vel? Tempore veniam voluptas 
                            atque. Blanditiis, adipisci?
                        </p>
                    </div>
                    <div className="mission">
                        <h4>Notre mission</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex modi quasi corporis quam 
                            molestias tempora enim ad at harum quos nesciunt minus quas, vel quaerat illo eligendi repellat id.
                            Iusto, accusamus id dolores pariatur porro maiores ab voluptatum reiciendis necessitatibus sequi 
                            asperiores ipsam alias natus distinctio sapiente quisquam corrupti blanditiis optio modi ratione 
                            officiis saepe quas. Dolorum, voluptatum tempore.
                            Asperiores dolores quidem ad eveniet! Optio dignissimos accusamus sapiente. Nemo explicabo quae error 
                            eveniet facere aliquam velit iure enim distinctio eos nulla saepe eaque quaerat voluptatem, incidunt 
                            expedita at delectus?
                            Et non ex tempore perspiciatis corrupti, delectus facere fuga modi nihil adipisci fugiat sit odit 
                            inventore, labore voluptatibus recusandae voluptas est neque distinctio vel? Tempore veniam voluptas 
                            atque. Blanditiis, adipisci?
                        </p>
                    </div>
                    <div className="team">
                        <h4>L'equipes</h4>
                        <p>
                            Une équipe de passionnés travaille au quotidien pour mener à bien ce projet dont 
                            l'objectif principale est d'avoir un maximun d'impact positif sur la vie des personnes.
                        </p>
                        <div className="row g-4 mt-3">
                            <div className="col-md-6">
                                <div className="team1">
                                    <div className="divimg">
                                        <img src={"./team/team.png"} className='img-fluid' alt="" />
                                    </div>
                                    <div className="description">
                                        <h5>Esther Fotse</h5>
                                        <span>CEO</span>
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
                                        <h5>Bethe</h5>
                                        <span>Assistance</span>
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
                                        <h5>Olga </h5>
                                        <span>Assistante</span>
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
                                        <span>Poste</span>
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
                                        <h5>Colby Toscani</h5>
                                        <span>Dévévoloppeur web</span>
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
                                        <h5>John Doe</h5>
                                        <span>Poste</span>
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
