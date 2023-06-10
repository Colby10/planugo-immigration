import React from 'react'
import '../css/blog.css'




export default function Blog() {
    return (
        <div className='container Blog'>
            <div className="wrap-content-blog">
                <h1>NOS ARTICLES</h1>
                <div className="spaceOne"></div>
            </div>
            <div className="content-card">
                <div className="row g-2">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://source.unsplash.com/user/diegyms/300x200" alt="Blog-one" />
                            <div className="card-body">
                                <h5>One</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, nesciunt.
                                    Porro voluptatibus sit ea asperiores! In nesciunt asperiores, doloribus.
                                </p>
                                <div>
                                    <a href="/" onClick={e => e.preventDefault()} >Lire...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                            <img src="https://source.unsplash.com/user/diegyms/300x200" alt="Blog-one" />
                            <div className="card-body">
                                <h5>One</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, nesciunt.
                                    Porro voluptatibus sit ea asperiores! In nesciunt asperiores, doloribus.
                                </p>
                                <div>
                                    <a href="/" onClick={e => e.preventDefault()} >Lire...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                            <img src="https://source.unsplash.com/user/diegyms/300x200" alt="Blog-one" />
                            <div className="card-body">
                                <h5>One</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, nesciunt.
                                    Porro voluptatibus sit ea asperiores! In nesciunt asperiores, doloribus.
                                </p>
                                <div>
                                    <a href="/" onClick={e => e.preventDefault()} >Lire...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
