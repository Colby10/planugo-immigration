import React from 'react'
import '../css/russie.css'
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';


export default function Bielorussie() {
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
                        <h5 className='pays'>– Biélorussie : </h5>
                        <p>
                            <strong>Également ouvert aux personnes même qui n’ont pas le bac. <br /> Avance de 1 million. </strong> <br />
                            La scolarité est payée soit une avance ici ou en totalité sur place ( en fonction de l’école qui va vous accepter.
                            Prévoir <strong>2 millions </strong> pour l’hébergement et l’école). La procédure dure 3-4 semaines.
                            Coût: <strong>1 million </strong> à payer en début de procédure.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}