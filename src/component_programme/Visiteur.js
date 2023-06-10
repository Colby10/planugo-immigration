import React from 'react'
import '../css/express.css';
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';





export default function Visiteur() {


    return (
        <div>
            <Navbar />
            <div className="wrap-express">
                <div className="container">
                    <h1>Visa Visiteur</h1>
                    <p><a href="/">Acceuil -</a>Visa Visiteur</p>
                </div>
            </div>
            <div className="container">
                <div className="main-express">
                    <h3>Immigrez au Canada avec le visa visiteur</h3>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title='video-entree-express'
                                    src="https://www.youtube.com/embed/FCEPfHhHc2Y " allowfullscreen> 
                                </iframe>
                            </div>
                        </div>
                        <div className="col-md-6 eval">
                            <h4 className='fw-bold'>
                                Parlez à une de nos consultantes pour plus d'informations !
                            </h4>
                            <p className='mt-3'>Cameroun: (+237) 698 38 80 59 / 674 23 93 29</p>
                            <p>Côte d'ivoire: (+225) 05 65 25 01 68 / 07 03 73 84 79 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="programme mb-4">
                    <h3>Programme d’immigration pour gens d’affaires</h3>
                    <p>
                        Il est conçu pour permettre aux travailleurs qualifiés dans des métiers spécialisés au 
                        Canada, de devenir résidents permanents. Le candidat à ce programme doit être détenteur 
                        d’un certificat de compétences qui justifie qu’il est qualifié dans un métier 
                        spécialisé. Cela signifie que le candidat a réussi à un examen d’agrément, ou répond à 
                        toutes les exigences pour exercer son métier dans la province ou le territoire en 
                        question. <br /> <br /> Études <br /> <br />

                        Ce programme ne comporte pas d’exigence en matière d’études. <br /> <br />

                        Compétences linguistiques <br /> <br />

                        Vous devez obtenir la note minimale de 5 pour les NCLC en ce qui concerne l’expression 
                        orale et la compréhension de l’oral, et une note de 4 pour la lecture et l’écriture de 
                        NCLC. Vos tests de langues sont valides 2 ans à compter de la date des résultats et
                        doivent être valides le jour de la présentation de la demande de résidence permanente.
                        <br /> <br /> Preuve de fond <br /> <br />

                        Vous devez prouver que vous pouvez subvenir à vos besoins et à ceux de votre famille, 
                        sauf si vous êtes autorisé à travailler au Canada, ou que vous détenez une offre 
                        d’emploi valide d’un employeur canadien.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
