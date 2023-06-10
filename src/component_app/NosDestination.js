import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../config-files/firebase';
import '../css/nosdestination.css'
import Button from '../component_reuseable/Button'



export default function NosDestination() {

    const [afficher, setAffiche] = useState([])

    /* function to get all offres from firestore in realtime */

    useEffect(() => {
        const q = query(collection(db, 'offres'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setAffiche(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className="section_destination">
            <div className='container'>
                <div className="wrap-content-destination">
                    <h1>NOS OFFRES D' EMPLOIS</h1>
                    <div className="spaceOne"></div>

                    {afficher.map((item, index) => {
                        
                        return (
                            <div className="nos_offres" key={index + 1}>
                                <div className="clasname">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3 className='fw-bold recrutement'>{item.data.pays}</h3>
                                            <p className='text_explication'>{item.data.description}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className='titre'>{item.data.poste}</h4>
                                            <hr />
                                            <p className=""><i className="fa-solid fa-check"></i> Langue : <span>{item.data.langue}</span> </p>
                                            <p className=""><i className="fa-solid fa-check"></i> Education : <span>{item.data.education}</span> </p>
                                            <p className=""><i className="fa-solid fa-check"></i> Expérience : <span>{item.data.experience}</span> </p>
                                            <p className=""><i className="fa-solid fa-check"></i> Salaire : <span>{item.data.salaire}</span> </p>
                                            <p className=""><i className="fa-solid fa-check"></i> Lieu : <span>{item.data.lieu}</span> </p>

                                            <Button className="btn col-md-4 mt-3" type="button" data_toggle="modal" data_target="#Postuler"
                                            >Postuler maintenant</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>

    )
}
