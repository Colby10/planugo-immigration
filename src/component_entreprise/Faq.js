import React from 'react'
import '../css/faq.css';
import Navbar from '../component_app/Navbar';
import Footer from '../component_app/Footer';




const Faq = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className=" faq-title">
            <div className="container ">
                <h1>Centre d'aide</h1>
                <p><a href="/">Accueil -</a> Centre d'aide</p>
            </div>
        </div>
        <div className="container">
            <div className="centre_aide">
                <h3>1. Qu'est-ce que Immigration by planugo ?</h3>
                <p>  Immigration By PlanUgo est une agence d'immigration basé dans la recherche et le placement des candidats qualifier pour les entreprises au canada.
                </p>

                <h3>2. Comment nous trouver ?</h3>
                <p> Notre bureau est situé au cameroun, à 100m de la station Bocom Makepet Missoke. <br /><br />
                    Ouvert du lundi au vendredi, de 09h30 à 17h30. Nos numéros de téléphone: +237 698 388 059 / 674 239 329. <br /><br />
                    Pour la côte d'ivoire, nous somme situés aux 2 plateaux, Abidjan. Joignable au +255 05 65 25 01 68 / 07 03 73 84 79. <br /><br />
                    Merci de prendre rendez-vous par courriel ou Whatssapp au préalable avant de passé au bureau ! <br /><br />
                    Pour ceux qui sont hors du cameroun, vous pouvez me contacter via Whatsapp au +33 665 378 632.
                </p>

                <h3>3. Quels sont les services disponibles sur Immigration by planugo ?</h3>
                <p>  - Contrat de travail pour le canada. <br /><br />
                     - Formalisation du CV format Canadiens<br /><br />
                     - Résidence permanente(Entrer express / Arrima)<br /><br />
                     - Création des profils<br /><br />
                     - éqquivalence de diplôme <br /><br />
                     - Vente de billet d'avion 
                </p>

                <h3>4.  Pourquoi choisir Immigration by planugo ?</h3>
                <p> PlanUgo offre à ses candidats une transparence et une intégrité dans notre travail</p>

                <h3>5. Quels sont les moyens de paiement acceptés par immigration PlanUgo ?</h3>
                <p>Les payements peuvent s'effectuer par Orange Money, Mobile Money, Paypal, MoneyGram, ou en espèce</p>

                <h3>6. Comment se déroule notre procedure ?</h3>
                <p>Chez nous la procédure est très simple en faite, elle se déroule en 4 étapes: <br /><br />
                - Etape 1: L'ouverture de votre dossier chez nous avec un premier montant non remboussable <br /><br />
                - Etape 2: Nous donné un delais de 16 à 18 mois pour nous donné le temps de vous trouvez un éventuelle contrat pouvant vous satisfaire. <br /><br />
                - Etape 3: Seulement a la signature de votre contrat que vous serez engagé à nous versé nos frais de service mentionné lors de l'entretient <br /><br />
                - Etape 4: A la signature du contrat tous les dépenses(visa,billet de voyage et autre...) sauf la visite médical seront a vaut frais personnel
                </p>

                <h3>7. Offrez-vous une assurance et ou les remboursements ?</h3>
                <p>Nous n'offrons pas de rembourssement car tant que vous n'avez pas effectué la signature de votre contrat vous ne nous devez rien.<br /><br /> Et donc aucun rembourssement n'est à faire .</p>

                <h3>8. Pouvez vous m'aider à organiser les documents dont j'ai besoin ?</h3>
                <p className='mb-5'>Pour tous soutient veuillez nous trouvé dans nos locaux ou nous contacté sur Nos numéros de téléphone: <br />
                - situé au cameroun, à 100m de la station Bocom Makepet Missoke :  +237 698 388 059 / 674 239 329. <br />
                - situés en Côte d'ivoire aux 2 plateaux, Abidjan : +255 05 65 25 01 68 / 07 03 73 84 79.</p>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Faq