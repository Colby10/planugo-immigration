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
                        <h3 className='mt-4'>L’immigration Canadienne n’a jamais été Aussi facile !</h3>
                        <p className='mt-3 fw-bold'>
                            Nous vous accompagnons pour planifier votre futur avec votre famille au Canada en 
                            travaillant pour les milliers d’employeurs qui recherche des travailleurs dans 
                            tous les domaines d’emploi par notre firme.
                        </p>
                    </div>
                </div>
                <ButtonLink className="btn btn-md ww text-center"
                    href="/contact"
                >
                    Contactez-nous Maintenant
                </ButtonLink>
            </div>
        </div>
        </>
    )
}
