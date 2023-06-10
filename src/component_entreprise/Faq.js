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
                <p><a href="/">Acceuil -</a> Centre d'aide</p>
            </div>
        </div>
        <div className="container">
            <div className="centre_aide">
                <h3>1. Hello World ?</h3>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>

                <h3>2. Hello World ?</h3>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>

                <h3>3. Hello World ?</h3>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>

                <h3>4. Hello World ?</h3>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>

                <h3>5. Hello World ?</h3>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>

                <h3>6. Hello World ?</h3>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>

                <h3>7. Hello World ?</h3>
                <p className='mb-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati 
                    cupiditate eveniet tempore. Ipsa aliquam perferendis accusamus voluptate, maxime est. 
                    Nam, voluptate reiciendis? Impedit, autem veniam. Incidunt deserunt in quia.
                </p>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Faq