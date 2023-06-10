import React from 'react'
import '../css/canada.css'
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';
import ServiceCanada from '../component_reuseable/ServiceCanada';
import Works from '../component_reuseable/Works';



export default function Canada() {
    return (
        <>
            <Navbar />
            <div className='section_canada'>
                <div className="container">
                    <div className="wrap-content-canada">
                        <h1>COMMENT CA MARCHE</h1>
                        <div className="spaceOne"></div>
                        <div className="comment">
                            <div className="row g-4">
                                <Works 
                                    src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                    titre="Contacter nous maintenant"
                                    href="/contact"
                                    description="Commencer "
                                    icon={<i className="fa-regular fa-circle-right"></i>}
                                />
                                <Works 
                                    src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                    titre="Ouvrez votre dossier"
                                    href="/contact"
                                    description="Commencer "
                                    icon={<i className="fa-regular fa-circle-right"></i>}
                                />
                                <Works 
                                    src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                    titre="Obtenez votre Visa"
                                    href="/contact"
                                    description="Commencer "
                                    icon={<i className="fa-regular fa-circle-right"></i>}
                                />
                                <Works 
                                    src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                    titre="Voyager pour le Canada"
                                    href="/contact"
                                    description="Commencer "
                                    icon={<i className="fa-regular fa-circle-right"></i>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_service">
                <div className="container">
                    <h1>NOS SERVICES</h1>
                    <div className="spaceOne"></div>
                    <div className="services">
                        <div className="row g-4">
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Accompagnement"
                                texte1="Que vous offre le service d'accompagnement au Canada ?"
                                href="/"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Entrée express"
                                texte1="Qu'est-ce que le programme Entrée express pour immigrer au Canada ?"
                                href="/entree-express"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Arrima"
                                texte1="Comment fonctionne la résidence permanente ?"
                                href="/residence-permanente"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Parrainage"
                                texte1="Comment fonctionne le parrainage canadien pour époux ?"
                                href="/parrainage"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Permis d’études"
                                texte1="Obtenir des avantages en étudiant au Canada"
                                href="/permis-etude"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Permis de travail"
                                texte1="Comment fonctionnent les permis de travail canadiens?"
                                href="/permis-de-travail"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Visa Visiteur"
                                texte1="C'est quoi un Visa touristes pour le Canada ?"
                                href="/visiteur"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
