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
                        <h5 className='pays'>- Serbie :</h5>
                        <p>
                            Vous pourrez partir que vous avez le bac ou non. La procédure dure 6-8 semaines. <br />
                            Coût: <strong>2.7 millions</strong> dont une avance de <strong>500.000  francs</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}