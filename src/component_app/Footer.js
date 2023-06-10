import React from 'react'
import '../css/footer.css';
import ButtonLink from '../component_reuseable/ButtonLink';



export default function Footer() {
  return (
    <div className='container-fluid  footer'>
      <div className=" container">
        <div className="section_footer">
          <div className="row g-3 ">
            <div className="col-md-3 logo">
              <a href="/"  className="navbar-brand ab"> 
                <img src={"/logo/logo.png"} alt="logo" />
              </a>
              <h5>Services d'aide d'immigration sur mesure</h5>
            </div>
            <div className="col-md-3">
              <h3>Douala</h3>
              <div className='space'></div>
              <div className="contact-footer">
                <span><i className="fa-solid fa-location-dot"></i> 100m Makepe Bocom</span><br />
                <span><i className="fa-solid fa-clock"></i> Lun-Vend 9h00-17h00</span><br />
                <span><i className="fa-solid fa-phone"></i> +237 698 38 80 59 / 674 23 93 29</span>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Abidjan</h3>
              <div className='space'></div>
              <div className="contact-footer">
                <span><i className="fa-solid fa-location-dot"></i> 2 plateaux vers la patisserie roi du pain</span><br />
                <span><i className="fa-solid fa-clock"></i> Lun-Vend 9h00-17h00</span><br />
                <span><i className="fa-solid fa-phone"></i> +225 05 65 25 01 68 / 07 03 73 84 79 </span>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Suivez-nous</h3>
              <div className='space'></div>
              <div className='Suivez-nous'>
                <ButtonLink
                  className="btn btn-sm facebook"
                  href="https://www.google.com"
                  icon={<i className="fa-brands fa-facebook"></i>}
                  target="_blank"
                  rel="noopener noreferrer">
                </ButtonLink>
                <ButtonLink
                  className="btn btn-sm whatsapp"
                  href="https://www.google.com"
                  icon={<i className="fa-brands fa-whatsapp"></i>}
                  target="_blank"
                  rel="noopener noreferrer">
                </ButtonLink>
                <ButtonLink
                  className="btn btn-sm telegram"
                  href="https://www.google.com"
                  icon={<i class="fa-brands fa-telegram"></i>}
                  target="_blank"
                  rel="noopener noreferrer">
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='section_header_two'>
          <p>Tous droits réservés. © 2023 <span>Planugo </span> par : 
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"> Blue Digital</a>
          </p>
        </div>
      </div>
    </div>
  )
}
