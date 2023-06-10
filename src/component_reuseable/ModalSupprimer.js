import React from 'react'
import Button from './Button'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../config-files/firebase';



export default function ModalSupprimer(props) {

    const onClose = () => {
        setTimeout(function () { window.$(".fade_delete").modal('toggle'); }, 2000);
    }

    /* function to delete a document from firstore */
    const { offre } = props

    const handleDelete = async () => {
        const tabDocRef = doc(db, 'offres', offre.id)
        try {

            await deleteDoc(tabDocRef)

            onClose();

        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="modal fade fade_delete " data-backdrop="static" id={"delete-" + offre.id}>
            <div className="modal-dialog modal-dialog-centered modal-confirm">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <div className="icon-box">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <h4 className='fw-bold mt-3'>{props.question}</h4>
                        <p className='mt-3 fw-bold'>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <Button className="btn btn-danger" data_dismiss={"modal"}
                            icon={<i className="bi bi-x-lg"></i>}
                        > Annuler</Button>

                        <Button type="" className="btn btn-info"
                            icon={<i className="bi bi-trash-fill"></i>}
                            onClick={handleDelete}
                        > Supprimer</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}