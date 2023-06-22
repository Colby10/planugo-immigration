import React from 'react'
import '../css/presentation.css'
import Works from '../component_reuseable/Works';






export default function Presentation() {
    return (
        <div className="container present">
            <div className=" wrap-presentation">
                <h1 className='d-none'>COMMENT CA MARCHE</h1>
                <div className="spaceOne d-none"></div>
                <div className="comment">
                    <div className="row g-4">
                        <Works
                            src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                            titre="Contacter nous maintenant"
                            href="/contact"
                            description="Commencer "
                            icon={<i className="fa-regular fa-circle-right"></i>}
                        />
                        <Works
                            src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                            titre="Ouvrez votre dossier"
                            href="/contact"
                            description="Commencer "
                            icon={<i className="fa-regular fa-circle-right"></i>}
                        />
                        <Works
                            src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                            titre="Obtenez votre Visa"
                            href="/contact"
                            description="Commencer "
                            icon={<i className="fa-regular fa-circle-right"></i>}
                        />
                        <Works
                            src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                            titre="Voyager pour le Canada"
                            href="/contact"
                            description="Commencer "
                            icon={<i className="fa-regular fa-circle-right"></i>}
                        />
                    </div>
                </div>
            </div>
            <div className="presentation mb-5">
                <div className="row g-3">
                    <div className="col-md-6">Photo</div>
                    <div className="col-md-6">
                        <h3>L’immigration Canadienne n’a jamais été Aussi facile !</h3>
                        <p className='mt-3'>Brev presentation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
