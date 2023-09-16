import React from 'react'
import '../css/russie.css'
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';


export default function Chypre() {
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
                        <h5 className='pays'>- Chypre :</h5>
                        <p>
                            <strong><u>Étudiant </u> : <br /> </strong> 29 ans maximum pour celui qui a le BAC / 30 ans maximum pour celui qui a la licence.
                            Coût : <strong>2.2 millions </strong> dont montant du 1er semestre inclus.
                            Durée de la procédure : <strong>2 semaines</strong>. <br /> <br />
                            <strong><u>Travailleur </u> : </strong> <br />
                            âge maximum: 30 ans / minimum baccalauréat
                            Coût: <strong>2.5 millions.</strong> <br />
                            Durée de la procédure : <strong>2 semaines.</strong>

                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}