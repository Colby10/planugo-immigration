import React from 'react'
import '../css/russie.css'
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';


export default function Russie() {
    return (
        <>
            <Navbar />

            <div className="section_service_russie">
                <div className="container">
                    <h1>NOS SERVICES</h1>
                    <div className="spaceOne"></div>
                    <div className="services">
                        <h5>Cher réseau,</h5>
                        <p>
                            Afin de répondre aux demandes des étudiants que nous recevons, Planugo a 
                            décidé de diversifier les offres que nous proposons. 
                            Désormais, nous ouvrons ces nouveaux pays. Ci-dessous les conditions. Il 
                            est temps de préparer votre rentrée scolaire 2023 / 2024 : <br /> <br />
                            <span><strong>Frais de dossier : 100.000 francs non remboursables</strong></span>

                        </p>
                        <h5 className='pays'>- Russie :</h5>
                        <p>
                            <strong>Obligation d’avoir le BAC.</strong> <br />
                            Frais de traduction du passeport et du diplôme: <strong>150.000 francs </strong> 
                            Prévoir: 1.5 - 2 millions pour l’école. Pour le paiement, ce sera 
                            défini par eux
                            soit une avance avant de partir ou la totalité à  l’arrivée.
                            Test de la tuberculose à faire à Louis Pasteur: <strong>10.000  francs </strong>
                            Coût: <strong>2 millions</strong> dont une avance de <strong>500.000 francs.</strong>

                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}