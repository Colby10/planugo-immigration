import React from 'react'
import '../css/express.css';
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';





export default function PermitEtude() {


    return (
        <div>
            <Navbar />
            <div className="wrap-express">
                <div className="container">
                    <h1>Permis d'étude</h1>
                    <p><a href="/">Canada -</a> Permis d'étude</p>
                </div>
            </div>
            <div className="container">
                <div className="main-express">
                    <h3>Immigrez au Canada avec pour les études</h3>
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
                <div className="programme">
                    <h3>Etudier au CANADA</h3>
                    <p>
                        Vous devez présenter une demande pour étudier au Canada à titre d’étudiant étranger. 
                        Faites prolonger votre permis d’études et déterminez s’il est possible de travailler 
                        pendant vos études ou après avoir obtenu votre diplôme.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="demande">
                    <h3>Etudier au Québec</h3>
                    <p>
                        Pour étudier au Québec vous devez : <br /> <br />
                        1) Choisir un programme d’étude et un établissement d’enseignement ; <br />
                        2) Obtenir une admission à un programme d’études ; <br />
                        3) Obtenir un certificat d’acceptation du Québec (CAQ) pour des études ;<br />
                        4) Obtenir un permis d’études ; <br />
                        5) Obtenir une assurance maladie et hospitalisation. <br />
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="points mb-4">
                    <h3>Études</h3>
                    <p>
                        Si vous avez étudié au canada, vous devriez détenir un certificat, diplôme ou grade d
                        ’un établissement d’enseignement secondaire ou postsecondaire. Si vous avez étudié 
                        ailleurs, vous devez avoir une évaluation des diplômes d’études EDE, à des fins 
                        d’immigration, d’un organisme désigné, pour démontrer des équivalences à un certificat, 
                        un diplôme ou un grade d’un établissement d’enseignement secondaire ou postsecondaire. 
                        Le maximum de point est de 25.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
