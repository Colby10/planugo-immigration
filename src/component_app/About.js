import React from 'react'
import Works from '../component_reuseable/Works'



export const About = () => {
    return (
        <div className='section_canada'>
            <div className="container">
                <div className="wrap-content-canada">
                    <h1>COMMENT CA MARCHE</h1>
                    <div className="spaceOne"></div>
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
            </div>
        </div>
    )
}

export default About
