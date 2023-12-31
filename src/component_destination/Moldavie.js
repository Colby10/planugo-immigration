import React from 'react'
import '../css/russie.css'
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';


export default function Moldavie() {
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
                        <h5 className='pays'>- Moldavie :</h5>
                        <p>
                            Visa touriste disponible en 6-8 semaines <br />
                            Coût: <strong>2.5millions cfa </strong> - avance <strong>500.000 francs </strong> <br />
                            Pour chaque pays, l’étudiants devra fournir : Passeport/acte de naissance / demi-photo en format numérique <br />

                            <strong>Ps:</strong> il n’y a pas de commission de <strong>5%</strong> sur ces procédures. c’est uniquement pour le canada. 

                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}