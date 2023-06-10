import { useState } from 'react'
import { db } from '../config-files/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import '../css/postuler.css';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';


export default function ModalPublier() {

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
        setTimeout(function () { window.$('#Publier').modal('toggle'); }, 7000);
    }

    const notify = () =>
        toast.success("Votre offre a été publier avec success !", {
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

    /* function to add new offre to firestore */
    const handleAdd = async (e) => {
        e.preventDefault();
        e.target.reset();
        try {
            await addDoc(collection(db, 'offres'), {
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
                created: Timestamp.now()
            })

            notify();
            onClose();

        } catch (err) {
            alert(err)
        }
    };

    return (

        <div className="modal fade" data-backdrop="static" id="Publier" >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" >Publier une offre</h5>
                        <Button className="btn btn-fermer btn-sm" data_dismiss="modal">
                            <i className="bi bi-x-lg"></i> Fermer</Button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleAdd} className='' >
                            <div className="form-row">
                                <Input className="col-md-4"
                                    type="text"
                                    placeholder="Pays du recrutement"
                                    onChange={(e) => setPays(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    placeholder="Poste"
                                    onChange={(e) => setPoste(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    placeholder="Langue"
                                    onChange={(e) => setLangue(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    placeholder="Education"
                                    onChange={(e) => setEducation(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    placeholder="Experience"
                                    onChange={(e) => setExperience(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4"
                                    type="text"
                                    placeholder="Salaire"
                                    onChange={(e) => setSalaire(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4 mb-3"
                                    type="text"
                                    placeholder="Lieu"
                                    onChange={(e) => setLieu(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4 mb-3"
                                    type="text"
                                    placeholder="Ville"
                                    onChange={(e) => setVille(e.target.value)}
                                    required
                                />
                                <Input className="col-md-4 mb-3"
                                    type="text"
                                    placeholder="Hauraire"
                                    onChange={(e) => setHauraire(e.target.value)}
                                    required
                                />
                                <Textarea label="Descriptions des taches"
                                    className="form-control textarea1"
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />

                                <Button className="btn col-md-4 mt-4"
                                    type="submit"
                                >Publier maintenant</Button>

                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
