import React from 'react'
import '../css/canada.css'
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';
import ServiceCanada from '../component_reuseable/ServiceCanada';
import Works from '../component_reuseable/Works';


export default function Allemagne() {
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
                                    titre="Voyager pour l'Allemagne"
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
                                texte1="Que vous offre le service d'accompagnement en Allemagne ?"
                                href="/"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Permis d’études"
                                texte1="Obtenir des avantages en étudiant en Allemagne"
                                href="/"
                                lire="Lire plus"
                                icon={<i className="fa-regular fa-circle-right"></i>}
                            />
                            <ServiceCanada 
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                                titre="Permis de travail"
                                texte1="Comment fonctionnent les permis de travail Allemamd ?"
                                href="/"
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