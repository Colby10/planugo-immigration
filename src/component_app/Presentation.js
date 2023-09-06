import React from 'react'
import '../css/presentation.css';
import ButtonLink from '../component_reuseable/ButtonLink';






export default function Presentation() {
    return (
        <>
        <div className="container present">
            <div className=" mb-5 ee">
                <div className="row g-3">
                    <div className="wrap-presentation">
                        <h3 className='mt-4'>L'immigration Canadienne n'a jamais été Aussi facile !o</h3>
                        <p className='mt-3 fw-bold'>
                            PlanUGo a été créer en février 2015 par Esther FOTSE. L'idée derrière cette
                            startup était de connecter des passionnés de voyager qui souhaitent découvrir
                            les destinations africaine. C'est au-fur-et-à-mesure de l'évolution dans le business,
                            que nous avons décidé d'ouvrir un volet immigration car contactés par plusieurs 
                            personnes désireuses d'immigrer en occident.
                        </p>
                        <p className='mt-3 fw-bold'>
                            C'est en novenbre 2021 que nous nous lancons dans les procédure d'immigration, d'abord
                            avec la Pologne, puis la Norverge et dépuis février 2022 le Canada. Courant 2023, des
                            nouvelles destinations s'ajoutent à notre liste de pays. A ce jour, PlanUGo s'occupe
                            des procédures touristes, étudiantes, travailleurs et résidents pour des candidats
                            répartis partout en Afrique et en Europe, nous veillons minitieusement à sélectionner
                            nos dossier, et ceux qui sont sélectionner sont assurés d'obtenir 100% de nos résultats.
                        </p>
                        <p className='mt-3 fw-bold'>
                            Nous vous accompagnons pour planifier votre futur avec votre famille au Canada en 
                            travaillant pour les milliers d'employeurs qui recherche des travailleurs dans 
                            tous les domaines d'emploi par notre firme.
                        </p>
                        <p className="mt-4 fw-bold">
                            Nous cherchons des personnes de talent, passionnées et dynamiques pour se joindre 
                            à notre équipe dans plusieurs régions du Québec ! Postulez Maintenant sur nos
                            différentes offres en ligne en renplissant tout les champs du formulaire 
                            ou contacter nous directement.
                        </p>
                    </div>
                </div>
                <ButtonLink className="btn btn-md ww text-center"
                    href="/contact"
                >
                    Contactez-nous maintenant
                </ButtonLink>
            </div>
        </div>
        </>
    )
}
