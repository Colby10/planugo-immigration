import { useState } from 'react';
import { db, storage } from '../config-files/firebase';
import { collection, addDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import 'firebase/storage';
import '../css/postuler.css';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Validation from './Validation';
import { ToastContainer, toast } from 'react-toastify';




export default function ModalPostuler() {

    const [file, setFile] = useState('');
    const [errors, setErrors] = useState({});
    const [progresspercent, setProgresspercent] = useState(0);


    const [values, setValues] = useState({

        nom: "",
        prenom: "",
        email: "",
        pays_origine: "",
        type_emplois: "",
        sexe: "",
        phone: "",
        pays_imigrations: "",
        type_de_procedure: "",
        cv_postulant: "",
        statut: "Candidat",
        created: Timestamp.now(),

    })


    const handleInput = (event) => {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj)
    }

    /********************Submit Input*************************/

    const handleValidation = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        /*const aa = Validation(values)
        if(aa.length !== 0){
            setErrors(aa);
            return
        }*/

        setValues({ nom: "", prenom: "", email: "", pays_origine: "", type_emplois: "", sexe: "", phone: "", pays_imigrations: "", type_de_procedure: "", cv: "" });

        uploadFile();  // Update file

        const dbRef = collection(db, "Postulant");
        addDoc(dbRef, values).then(docRef => {
            uploadFile(docRef);
            console.log("Document has been added successfully");

        }).catch(error => {
            console.log(error);
        });

    }
    const onClose = () => {
        setTimeout(function () { window.$('#Postuler').modal('toggle'); }, 7000);
    }
    const notify = () =>
        toast.success("Nous avons reçu votre candidature, nous reviendrons vers vous pour plus d'information !", {
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

    /********************Update File*************************/
    const uploadFile = (docRef) => {
        if (file == null) return;

        const storageRef = ref(storage, `files/${new Date().getTime()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {

                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error)
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then(
                    (downloadUrl) => {
                        console.log(downloadUrl)
                        updateDoc(docRef, { cv_postulant: downloadUrl }).then(() => {
                            notify();
                            onClose();
                            window.location().reload();

                        })
                    }).catch((error) => {
                        console.log("Votre candidature na pas été envoyer, réesayer plus tard");
                        console.log(error);
                    })

            }
        );

    }


    return (

        <div class="modal fade " data-backdrop="static" id="Postuler" >
            <div class="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Informations générales</h5>
                        <Button className="btn btn-fermer btn-sm" data_dismiss="modal">
                            <i className="bi bi-x-lg"></i> Fermer</Button>
                    </div>
                    <div className="modal-body">
                        <form action="/" onSubmit={handleValidation} >
                            <div className="form-row">
                                <Input className="col-md-6"
                                    value={values.nom}
                                    type="text"
                                    name="nom"
                                    onChange={handleInput}
                                    placeholder="Nom condidat"
                                    erreur={errors.nom && <span className='errors_input' style={{ color: "red" }}>{errors.nom}</span>}
                                    required
                                />
                                <Input className="col-md-6"
                                    value={values.prenom}
                                    type="text"
                                    name="prenom"
                                    onChange={handleInput}
                                    placeholder="Prénom condidat"
                                    erreur={errors.prenom && <span className='errors_input' style={{ color: "red" }}>{errors.prenom}</span>}
                                    required
                                />
                                <Input className="col-md-6"
                                    value={values.email}
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    placeholder="Email condidat"
                                    erreur={errors.email && <span className='errors_input' style={{ color: "red" }}>{errors.email}</span>}
                                    required
                                />
                                <Select className="col-md-6"
                                    options={[
                                        { value: "Cameroun", label: "Cameroun" },
                                        { value: "Côte d'ivoire", label: "Côte d'ivoire" },
                                        { value: "Gabon", label: "Gabon" },
                                        { value: "Mali", label: "Mali" },
                                        { value: "Congo kinshasa", label: "Congo kinshasa" },
                                        { value: "Congo brazzaville", label: "Congo brazzaville" },
                                        { value: "Togo", label: "Togo" },
                                        { value: "Benin", label: "Benin" },
                                    ]}
                                    selected="Pays d'origine"
                                    value={values.pays_origine}
                                    name="pays_origine"
                                    onChange={handleInput}
                                    erreur={errors.pays_origine && <span className='errors_input' style={{ color: "red" }}>{errors.pays_origine}</span>}
                                    required
                                />

                                <Select className="col-md-12"
                                    options={[
                                        { value: "Assembleur de bois", label: "Assembleur de bois " },
                                        { value: "Tappisier / Rembourreur", label: "Tappisier / Rembourreur" },
                                        { value: "Opérateur de production", label:"Opérateur de production" },
                                        { value: "Opérateur de machine", label: "Opérateur de machine" },
                                        { value: "Machiniste", label: "Machiniste" },
                                        { value: "Informaticiens", label: "Informaticiens" },
                                        { value: "Infirmier / Aide soignante", label: "Infirmier / Aide soignante" },
                                        { value: "Concierge", label: "Concierge" },
                                        { value: "Agent de sécurité", label: "Agent de sécurité" },
                                        { value: "Agent d'entretien", label: "Agent d'entretien" },
                                        { value: "Cuisinier", label: "Cuisinier" },
                                        { value: "Serveur", label: "Serveur" },
                                        { value: "Plongeur", label: "Plongeur " },
                                        { value: "Maoeuvre maçon", label: "Maoeuvre maçon" },
                                        { value: "Caissiere", label: "Caissière" },
                                        { value: "Électriciens", label: "Électriciens" },
                                        { value: "Soudeur", label: "Soudeur" },
                                        { value: "Chaudronier", label: "Chaudronier" },
                                        { value: "Peintre", label: "Peintre" },
                                        { value: "Carrossier", label: "Carrossier" },
                                        { value: "Mécanicien auto", label: "Mécanicien auto" },
                                        { value: "Mécanicien engin lourd", label: "Mécanicien engin lourd" },
                                        
                                    ]}
                                    selected="Type d'emplois"
                                    value={values.type_emplois}
                                    name="type_emplois"
                                    onChange={handleInput}
                                    erreur={errors.type_emplois && <span className='errors_input' style={{ color: "red" }}>{errors.type_emplois}</span>}
                                    required
                                />
                                <Select className="col-md-6"
                                    options={[
                                        { value: "Homme", label: "Homme" },
                                        { value: "Femme", label: "Femme" },
                                    ]}
                                    selected="Sexe"
                                    name="sexe"
                                    value={values.sexe}
                                    onChange={handleInput}
                                    erreur={errors.sexe && <span className='errors_input' style={{ color: "red" }}>{errors.sexe}</span>}
                                    required
                                />
                                <Input className="col-md-6"
                                    type="tel"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleInput}
                                    placeholder="Téléphone"
                                    erreur={errors.phone && <span className='errors_input' style={{ color: "red" }}>{errors.phone}</span>}
                                    required
                                />

                                <Select className="col-md-6 mb-3"
                                    options={[
                                        { value: "Canada", label: "Canada" },
                                        { value: "Allemagne", label: "Allemagne" },
                                        { value: "Russie", label: "Russie" },
                                        { value: "Bielorussie", label: "Bielorussie" },
                                        { value: "Chypre", label: "Chypre" },
                                        { value: "Moldavie", label: "Moldavie" },
                                        { value: "Serbie", label: "Serbie" },
                                    ]}
                                    selected="Pays d'immigration"
                                    name="pays_imigrations"
                                    value={values.pays_imigrations}
                                    onChange={handleInput}
                                    erreur={errors.pays_imigrations && <span className='errors_input' style={{ color: "red" }}>{errors.pays_imigrations}</span>}
                                    required
                                />
                                <Select className="col-md-6 mb-3"
                                    options={[
                                        { value: "Etude", label: "Etude" },
                                        { value: "Contrat de travail", label: "Contrat de travail" },
                                        { value: "Tourisme", label: "Tourisme" },
                                        { value: "Résidence permanente", label: "Résidence permanente" },
                                        { value: "Entrée express ", label: "Entrée express " },
                                       
                                    ]}
                                    selected="Type de procedure"
                                    name="type_de_procedure"
                                    value={values.type_de_procedure}
                                    onChange={handleInput}
                                    erreur={errors.type_de_procedure && <span className='errors_input' style={{ color: "red" }}>{errors.type_de_procedure}</span>}
                                    required
                                />

                                <Input className="col-md-12 CV mb-5"
                                    label="Envoyez-nous votre CV, 5 MO Max, Doc Pdf."
                                    accept="/pdf/*"
                                    type="file"
                                    name="cv"
                                    value={values.cv}
                                    onChange={(e) => { setFile(e.target.files[0]) }}
                                    required
                                />
                                <div className='text-danger d-none' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>

                                <Button type="submit" className="btn btn-md col-md-6" >Envoyer</Button>

                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}