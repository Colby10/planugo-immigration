import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc} from "firebase/firestore";
import { db } from '../config-files/firebase';
import '../css/contact.css';
import NavbarDashbord from './NavbarDashbord';
import Button from '../component_reuseable/Button';
import { ToastContainer, toast } from 'react-toastify';




export default function ContactDashboard() {

    const [contact, setContact] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'Contact'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setContact(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);

    const handleDelete = async (id) => {
        const contDocRef = doc(db, 'Contact', id)
        try {
          await deleteDoc(contDocRef)
          notifyDelete();
    
        } catch (err) {
          alert(err)
        }
      }

      const notifyDelete = () =>
      toast.success("Ce candidat a été définitivement supprimer !", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        className: 'toast-message'
      });



    return (
        <div className='contact-Dash'>
            <NavbarDashbord />
            <div className="wrap-contact-d">
                <div className="container">
                    <h1>Messagerie Contact</h1>
                </div>
            </div>
            <div className="container">
                {contact.map((cont, index) => {
                    return (
                        <div className="container_dashboard" key={cont.id}>
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <span><strong>{index + 1}</strong></span> <br />
                                    <span className='d-none'><strong>{cont.id}</strong></span> <br />
                                    <span><strong>Nom: </strong>{cont.data.nom}</span> <br />
                                    <span><strong>Email: </strong>{cont.data.email}</span>
                                </div>
                                <div className="col-md-8">
                                    <span><strong>Objet: </strong>{cont.data.objet}</span>
                                    <p>{cont.data.message}</p>
                                    <Button className="btn btn-sm"
                                        type="button"
                                        icon={<i className="fa-sharp fa-solid fa-trash"></i>}
                                        onClick={() => handleDelete(cont.id)}
                                    ></Button>
                                    <p className='msg'>Supprimer ?</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}
