import React from 'react'
import '../css/carrousel.css';


export default function Carrousel() {
    return (
        <section className='Slider_carrousel'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" className="d-block w-100" alt="..." />
                        <div className="text-box">
                            <h2 className="wow slideInRight" data-wow-duration="2s">Immigration By Planugooo</h2>
                            <p className="wow slideInLeft" data-wow-duration="2s">
                                Une conseillère en 'immigration Canadien qui donne l'opportunité aux personnes, aux 
                                familles et aux entreprises de réaliser leur rêve d'nnqnfqnfqnfoqj  au Canada.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" className="d-block w-100" alt="..." />
                        <div className="text-box">
                            <h2 className="wow fadeInUp" data-wow-duration="4s">Immigration by Planugo</h2>
                            <p className="wow fadeInUp" data-wow-duration="2s">
                                Une conseillère en d'immigration Canadien qui donne l'opportunité aux personnes, aux 
                                familles et aux entreprises de réaliser leur rêve d'établissement au Canada.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" className="d-block w-100" alt="..." />
                        <div class="text-box">
                            <h2 className="wow slideInUp" data-wow-duration="4s" >Immigration by Planugo</h2>
                            <p className="wow fadeInDown" data-wow-duration="4s">
                                Une conseillère en d'immigration Canadien qui donne l'opportunité aux personnes, aux 
                                familles et aux entreprises de réaliser leur rêve d'établissement au Canada. 
                            </p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>


    )
}
