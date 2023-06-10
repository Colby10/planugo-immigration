import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../config-files/firebase';
import '../css/postuler.css'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import { ToastContainer, toast } from 'react-toastify';



export default function ModalModifier(props) {

    const { offre } = props
    const [pays, setPays] = useState("")
    const [poste, setPoste] = useState("")
    const [langue, setLangue] = useState("")
    const [education, setEducation] = useState("")
    const [experience, setExperience] = useState("")
    const [salaire, setSalaire] = useState("")
    const [lieu, setLieu] = useState("")
    const [ville, setVille] = useState("")
    const [hauraire, setHauraire] = useState("")
    const [description, setDescription] = useState("")

    const onClose = () => {

        setTimeout(function () { window.$('.fade_update').modal('toggle'); }, 7000);
    }

    const notify = () =>
        toast.success("Vos modifications ont été prisent en compte avec success !", {
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

    /* function to update document in firestore */
    const handleUpdate = async (e) => {
        e.preventDefault();

        const tabDocRef = doc(db, "offres", offre.id)
        try {
            const response = await updateDoc(tabDocRef, {
                pays: pays,
                poste: poste,
                langue: langue,
                education: education,
                experience: experience,
                salaire: salaire,
                lieu: lieu,
                ville: ville,
                hauraire: hauraire,
                description: description,


            })

            notify();
            onClose();

            console.log(response)
        } catch (err) {
            alert(err)
            console.error(err)
        }

    }

    React.useEffect(() => {
        setPays(offre.data.pays)
        setPoste(offre.data.poste)
        setLangue(offre.data.langue)
        setEducation(offre.data.education)
        setExperience(offre.data.experience)
        setSalaire(offre.data.salaire)
        setLieu(offre.data.lieu)
        setVille(offre.data.ville)
        setHauraire(offre.data.hauraire)
        setDescription(offre.data.description)
    }, [offre])

    return (

        <div className="modal fade fade_update" data-backdrop="static" id={"edit-" + offre.id} >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" >Modifier une offre</h5>
                        <Button className="btn btn-fermer btn-sm" data_dismiss="modal">
                            <i className="bi bi-x-lg"></i> Fermer</Button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleUpdate}>
                            <div className="form-row">
                                <Input className="col-md-4"
                                    type="text"
                                    value={pays}
                                    onChange={(e) => setPays(e.target.value)}
                                    placeholder="Pays du recrutement"
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    value={poste}
                                    onChange={(e) => setPoste(e.target.value)}
                                    placeholder="Poste"
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    value={langue}
                                    onChange={(e) => setLangue(e.target.value)}
                                    placeholder="Langue"
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    placeholder="Education"
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    placeholder="Experience"
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    value={salaire}
                                    onChange={(e) => setSalaire(e.target.value)}
                                    placeholder="Salaire"
                                />
                                <Input className="col-md-4 mb-3"
                                    type="text"
                                    value={lieu}
                                    onChange={(e) => setLieu(e.target.value)}
                                    placeholder="Lieu"
                                />
                                <Input className="col-md-4 mb-3"
                                    type="text"
                                    value={ville}
                                    onChange={(e) => setVille(e.target.value)}
                                    placeholder="Ville"
                                />
                                <Input className="col-md-4 mb-3"
                                    type="text"
                                    value={hauraire}
                                    onChange={(e) => setHauraire(e.target.value)}
                                    placeholder="Hauraire"
                                />
                                <Textarea label="Descriptions des taches"
                                    className="form-control textarea1"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                ></Textarea>

                                <Button className="btn col-md-4 mt-4"
                                    type="submit"
                                >Modifier</Button>

                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
