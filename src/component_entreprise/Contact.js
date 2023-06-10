import React, { useState } from 'react'
import '../css/contact.css';
import Navbar from '../component_app/Navbar';
import Input from '../component_reuseable/Input';
import Textarea from '../component_reuseable/Textarea';
import Button from '../component_reuseable/Button';
import Footer from '../component_app/Footer';
import { db } from '../config-files/firebase';
import { collection, addDoc, Timestamp, } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';





export default function Contact() {

  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [objet, setObjet] = useState("")
  const [message, setMessage] = useState("")



  const handleContact = async (event) => {
    event.preventDefault();
    event.target.reset();
    try {
      await addDoc(collection(db, 'Contact'), {
        nom: nom,
        email: email,
        objet: objet,
        message: message,
        created: Timestamp.now(),
      })
      
      notify();

    } catch (err) {
      alert(err)
    }


  }

  const notify = () =>
    toast.success("Votre message a été envoyer avec success, nous reviendrons vers vous pour plus d'information !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: 'toast-message'
    });

  return (
    <div className=''>
      <Navbar />
      <div className="wrap-contact">
        <div className="container ">
          <h1>Contact</h1>
          <p><a href="/">Acceuil -</a> Contact</p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-7">
            <div className="phone">
              <h3>Nos adresses dans le monde</h3>
              <div className="row">
                <div className="cameroun col-md-6">
                  <div className="d-flex">
                    <img src={"./pays/cameroun.png"} className='img-fluid mr-2' alt="" />
                    <h4>Cameroun (siège social)</h4>
                  </div>
                  <span><strong>Agence de Douala</strong></span><br />
                  <span><strong>(+237) 698 38 80 59</strong></span> <br />
                  <span>100m Makepe Bocom</span>
                </div>
                <div className="ivoire col-md-6">
                  <div className="d-flex">
                    <img src={"./pays/ivoire.png"} className='img-fluid mr-2' alt="" />
                    <h4>Côte d'Ivoire</h4>
                  </div>
                  <span><strong>Agence d' Abidjan</strong></span> <br />
                  <span><strong>(+225) 05 65 250 168</strong></span> <br />
                  <span>2 plateaux vers la patisserie roi du pain</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
          <div className="warp-form">
            <h3>Ecrivez-nous</h3>
            <form onSubmit={handleContact}>
              <div className="form-row">
                <Input className="col-md-6"
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  onChange={(event) => setNom(event.target.value)}
                  required
                />
                <Input className="col-md-6"
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <Input className="col-md-12"
                  type="text"
                  name="objet"
                  placeholder="Objet"
                  onChange={(event) => setObjet(event.target.value)}
                  required
                />
                <Textarea className="form-control textarea1 mt-3"
                  placeholder="Votre message"
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
                <Button className="btn col-md-4 mt-4"
                  type="submit"
                >Envoyer</Button>
              </div>
            </form>
          </div>
          </div>

        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}