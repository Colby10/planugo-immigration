import React from 'react'
import '../css/express.css';
import Navbar from '../component_app/Navbar'
import Footer from '../component_app/Footer';
import Button from '../component_reuseable/Button';





export default function ResidencePermante() {


    return (
        <div>
            <Navbar />
            <div className="wrap-express">
                <div className="container">
                    <h1>Résidence permanente.</h1>
                    <p><a href="/">Canada -</a> Résidence permanente.</p>
                </div>
            </div>
            <div className="container">
                <div className="main-express">
                    <h3>Découvrez comment fonctionne la résidence permanente</h3>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title='residence-permanente'
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
                    <p>
                        Chaque année, des milliers de personnes réalisent leur rêve de devenir résidence 
                        permanente au Canada et il n’y a aucune raison de ne pas être parmi elles. Les volets 
                        d’immigration de la catégorie de résidence permanente permettent de vivre, de travailler 
                        et d’étudier au Canada de façon permanente. <br />
                        Il est important de déterminer le flux d’immigration qui vous conviendrait le mieux afin
                        d’éviter une demande refusée. C’est pour cette raison qu’il est fortement recommandé de 
                        rechercher les conseils d’une consultante expérimentée en immigration afin de surmonter 
                        les obstacles logistiques souvent rencontrés par les novices. <br />
                        Lors de la présentation d’une demande de résidence permanente, on peut également 
                        choisir d’inclure son conjoint ainsi que les personnes à charge. Après le dépôt d’une 
                        demande, un demandeur qui a obtenu la résidence permanente peut être admissible à 
                        déménager avec son conjoint et ses personnes à charge au Canada.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="demande">
                    <h3>Comment obtenir une carte de résident permanent ?</h3>
                    <p>
                        Si vous détenez le statut de résident permanent au Canada, vous devrez présenter votre 
                        carte de résident permanent à chaque fois que vous souhaitez entrer de nouveau. Au 
                        profit des immigrants canadiens, il existe de nombreuses façons de l’obtenir. Pour 
                        commencer, si vous êtes un nouveau résident permanent au Canada, il n’est pas 
                        nécessaire de demander une carte, car une carte vous sera envoyée automatiquement.
                    </p>
                    <p>
                        Indiquez simplement votre adresse postale canadienne par la poste ou l’outil en ligne 
                        dans les 180 jours suivant votre arrivée au Canada. Si vous ne le faites pas dans le 
                        délai de 180 jours, vous devrez payer des frais de traitement de 50 $ pour recevoir une 
                        nouvelle carte.
                    </p>
                    <p>
                        Vous avez droit à une nouvelle carte si: <br />
                        1- Vous avez perdu votre carte <br />
                        2-On l’a volé <br />
                        3- Vous avez légalement changé de nom <br />
                        4- Votre carte a expiré ou expirera au cours des neuf prochains mois <br /> <br />
                        Pour commencer, il vous suffit de suivre les étapes du processus de demande, qui vont 
                        de l’obtention de copies de votre passeport à la fourniture d’une photo pour la carte. 
                        Ensuite, payez vos frais de candidature en ligne et soumettez votre candidature pour 
                        traitement. Les délais de traitement varient en fonction de la période de l’année où 
                        vous postulez.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="points mb-4">
                    <h3>Quelles sont les options de résidence permanente au Canada ?</h3>
                    <li><strong>Parrainnage au conjoint canadien</strong></li>
                    <li><strong>Parrainnage familial canadien</strong></li>
                    <li><strong>Programme des travailleurs qualifiés (fédéral)</strong></li>
                    <li><strong>Programme fédéral des métiers spécialisés</strong></li>
                    <li><strong>Classe canadienne expérimentée</strong></li>
                    <li><strong>Motif humanitaires et compatissants</strong></li>
                    <li><strong>Immigration des entreprises et des investisseurs au canada</strong></li>
                    <li><strong>Programme des candidats des provinces</strong></li>
                </div>
            </div>
            <Footer />
        </div>
    )
}
