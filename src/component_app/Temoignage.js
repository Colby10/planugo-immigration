import React from 'react'
import '../css/temoignage.css';



export default function Temoignage() {
    return (
        <div className="section_discute">
            <div className='container'>
                <div className="wrap-content-discute">
                    <h1>CE QU' ILS PENSENT DE NOUS</h1>
                    <div className="spaceOne"></div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={"/img_offre/w1.jpeg"} className="d-block w-100" alt="slide-one" />
                        </div>
                        <div className="carousel-item">
                            <img src={"/img_offre/w2.jpeg"} className="d-block w-100" alt="slide-two" />
                        </div>
                        <div class="carousel-item">
                            <img src={"/img_offre/w3.jpeg"} className="d-block w-100" alt="slide-tree" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
