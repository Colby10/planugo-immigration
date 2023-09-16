import React from 'react'
import '../css/express.css';
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';
import Button from '../component_reuseable/Button';





export default function EntreExpress() {


    return (
        <div>
            <Navbar />
            <div className="wrap-express">
                <div className="container">
                    <h1>Entrée express</h1>
                    <p><a href="/canada">Canada -</a> Entrée express</p>
                </div>
            </div>
            <div className="container">
                <div className="main-express">
                    <h3>Immigrez au Canada avec le système d'entrée express</h3>
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
                            <Button className="btn btn-lg" type="button">
                                Commencer votre évaluation
                            </Button>
                            <p className="fonction">Cette fonctionnalité n'est pas encore disponible !</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="programme">
                    <h3>Qu'est-ce que le programme Entrée express pour immigrer au Canada ?</h3>
                    <p>
                        Le système d’ Entrée express (EE) du Canada est un processus de sélection utilisé par 
                        le ministère du gouvernement canadien «Immigration, Réfugiés et Citoyenneté Canada» 
                        (IRCC) pour sélectionner les immigrants qualifiés qui deviendront des résidents 
                        permanents du Canada. Pour entrer dans le bassin, les candidats admissibles doivent 
                        satisfaire aux exigences d’ Entrée express Canada en se qualifiant pour l’un des 
                        programmes d’immigration canadiens suivants. Entrée express comprend trois programmes 
                        d’immigration canadiens: 
                    </p>
                    <li><strong>le programme fédéral des travailleurs qualifiés</strong></li>
                    <li><strong>le programme fédéral des métiers spécialisés</strong></li>
                    <li><strong>le programme des candidats des provinces (PCP) </strong></li>
                </div>
            </div>
            <div className="container">
                <div className="demande">
                    <h3>Comment faire une demande d'entrée express au Canada?</h3>
                    <p>
                        Si vous pensez que vous êtes admissible au programme Entrée express, commencez par 
                        créer un profil ou parlez à l’un de nos conseillé en immigration . Vous avez 
                        60 jours pour remplir le profil en ligne et télécharger les documents requis. Votre 
                        profil contient vos informations personnelles et vos compétences qui contribuent à 
                        votre score dans le système de classement global basé sur des points (CRS).
                    </p>
                    <p>
                        Le profil aidera l’ IRCC à déterminer si vous répondez aux exigences d’Entrée express 
                        du Canada . Si vous êtes éligible, vous serez accepté dans le groupe où vous serez 
                        classé en fonction de votre score CRS. Vous devrez ensuite attendre dans le bassin 
                        jusqu’à ce que vous receviez une invitation à présenter une demande de résidence 
                        permanente.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="points">
                    <h3>Points d'entrée express</h3>
                    <p>Le CRS vous donne un score basé sur les informations de votre profil, y compris:</p>
                    <li><strong>compétences</strong></li>
                    <li><strong>éducation</strong></li>
                    <li><strong>capacité linguistique</strong></li>
                    <li><strong>expérience de travail</strong></li>
                    <li><strong>Vous pouvez augmenter vos points pour Entrée express avec:</strong></li>
                    <span>- Grades, diplômes ou certificats canadiens - une offre d'emploi valide - une nomination d'une province ou d'un territoire</span>
                </div>
            </div>
            <div className="container">
                <div className="delai">
                    <h3>Délai de traitement de l'entrée express</h3>
                    <p>
                        Si vous êtes admissible à Entrée express , votre demande peut rester dans le bassin 
                        jusqu’à 12 mois en fonction de votre score CRS et de l’objectif du gouvernement lors 
                        des tirages respectifs. Si l’IRCC vous invite à présenter une demande, vous aurez 60 
                        jours pour soumettre une demande de résidence permanente en ligne.
                    </p>
                    <p>
                        L’IRCC vise à traiter votre demande de résidence permanente dans un délai de 6 mois. 
                        Si vous ne recevez pas d’ITA dans les 12 mois, vous pouvez mettre à jour votre profil 
                        et vous devrez entrer à nouveau dans le pool.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="refus">
                    <h3>Refus d'entrée express</h3>
                    <p>
                        Voici quelques-unes des principales raisons pour lesquelles un ATI peut être refusé: 1) 
                        Ne répond pas aux exigences 2) Incapacité à comprendre ce que le gouvernement recherche 
                        3) Erreurs dans la soumission 4) Incapacité à optimiser les points dans les règlements
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="eviter">
                    <h3>Comment puis-je éviter un refus d'immigration canadienne?</h3>
                    <p>
                        Faire une demande de visa Entrée Express est un processus complexe et compétitif qui 
                        devient assez opportun, surtout si vous devez soumettre à nouveau votre demande. 
                        Travailler avec une consellière spécialisé en immigration peut aider à éliminer les 
                        erreurs et à optimiser votre profil. En travaillant avec Immigration by planugo sur 
                        votre visa d’entrée Canada Express , nous commencerons par nous assurer que votre profil
                        est rempli, honnêtement et avec précision, avec tous les documents requis téléchargés 
                        dans le délai de 60 jours.  
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="question mb-4">
                    <h3>Questions courantes sur l'entrée express</h3>
                    <p>
                        Quelles sont les exigences linguistiques pour Entrée express? Votre compétence 
                        linguistique admissible dépend des exigences de votre programme. Vous devez passer un 
                        test de langue normalisé approuvé par l’IRCC pour déterminer votre niveau d’anglais. 
                        Des points supplémentaires sont également disponibles pour les candidats qui prouvent 
                        la maîtrise de la langue française.
                    </p>
                    <p className='fw-bold'>Ma famille entière peut-elle immigrer après avoir réussi?</p>
                    <p>
                        Oui, vous pouvez amener votre époux, votre conjoint de fait admissible et vos enfants à 
                        charge. Vous devez répertorier toutes les personnes à charge sur votre profil Entrée 
                        express, et leur niveau d’éducation, leurs compétences linguistiques et leur âge sont 
                        pris en compte lors du calcul de vos points CRS.
                    </p>
                    <p className='fw-bold'>Puis-je travailler pendant que j’attends une décision après avoir fait une demande d’entrée express?</p>
                    <p>Oui, si vous avez un permis de travail valide ou si vous êtes admissible à un permis de travail valide.</p>
                    <p className='fw-bold'>Combien de points vais-je obtenir avec une offre d’emploi?</p>
                    <p>Les points peuvent aller de 50 à 200 points supplémentaires, selon le type d’offre d’emploi que vous recevez.</p>
                    <p className='fw-bold'>Quels sont les principaux facteurs du capital humain?</p>
                    <li><strong>Âge</strong></li>
                    <li><strong>Niveau d'éducation</strong></li>
                    <li><strong>Maîtrise de la langue</strong></li>
                    <li><strong>Expérience de travail au Canada</strong></li>
                </div>
            </div>
            <Footer />
        </div>
    )
}
