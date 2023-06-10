import React, { useState, useEffect } from 'react'
import NavbarDashbord from '../component_dashboard/NavbarDashbord';
import '../css/profil.css';
import { setDoc, doc,getDoc, Timestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth, db } from '../config-files/firebase';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../component_reuseable/Button';
import Input from '../component_reuseable/Input';



export const Profil = () => {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [poste, setPoste] = useState("")

    const [user, setUser] = useState({});

    const getUserr = async () => {
        
        const localUser = (JSON.parse(localStorage.getItem("planugo-user") || "null"))

        if (!localUser)
            return

        const refDoc = doc(db, "Admin", localUser.uid)
        const res = await getDoc(refDoc);
        setUser(res.data());

    }

    useEffect(() => {

        getUserr()

    }, [])


    const onClose = () => {
        setTimeout(function () { window.$('#admin').modal('toggle'); }, 2000);
    }

    const notify = () =>
        toast.success("Vous avez ajouter un Admin avec success !", {
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


    const handleRegister = (e) => {
        e.preventDefault();
        e.target.reset();

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                // Signed in
                const user = userCredential.user;

                try {
                    const docRef = doc(db, "Admin", user.uid)
                    await setDoc(docRef, {
                        
                        email: email,
                        nom: nom,
                        prenom: prenom,
                        poste: poste,
                        created: Timestamp.now()
                    });
                    console.log("Document written with ID", docRef.uid);

                } catch (err) {
                    console.error("Error addind document", err);
                }

                onClose();
                notify();
                
            }).catch((error) => {
                console.log(error.code);
                console.log(error.message);
                
            });

    };

    return (
        <div className="">
            <NavbarDashbord />

            <div className="container">
                <div className="wrap-profil">
                    <div className="text">
                        <div className="div-body">
                            <img className='img-fluid mx-auto d-block'
                                src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt="" />
                            <h3 className='fw-bold text-center'>{user.prenom}</h3>
                            <p className='text-center fw-bold'>Poste | {user.poste}</p>
                            <p className='fw-bold'>
                                "Notre plus grande faiblesse est d'abandonner. Le moyen le plus
                                sûr de réussir est toujours d'essayer juste une fois de plus."
                                -Thomas A.Edison
                            </p>
                        </div>
                    </div>
                    <Button className="btn btn-sm col-md-4 color_admin"
                        data_toggle="modal"
                        data_target="#admin"
                        icon={<i className="fa-solid fa-plus"></i>}>
                        Ajouter un admin
                    </Button>
                </div>
            </div>
            <div class="modal fade" id="admin" data-backdrop="static">
                <div className="modal-dialog  modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ajouter un admin</h5>
                            <Button className="btn btn-fermer btn-sm fw-bold" data_dismiss="modal">
                                <i className="bi bi-x-lg"></i> Fermer</Button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={handleRegister}>
                                <div className="form-row">
                                    <Input className="col-md-6"
                                        type="text"
                                        placeholder="Nom"
                                        name="nom"
                                        onChange={(e) => { setNom(e.target.value); }}
                                    />
                                    <Input className="col-md-6"
                                        type="text"
                                        placeholder="Prénom"
                                        name="prenom"
                                        onChange={(e) => { setPrenom(e.target.value); }}
                                    />
                                    <Input className="col-md-6"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={(e) => { setEmail(e.target.value); }}
                                    />
                                    <Input className="col-md-6 "
                                        type="password"
                                        placeholder="Mot de passe"
                                        name="password"
                                        onChange={(e) => { setPassword(e.target.value); }}
                                    />
                                    <Input className="col-md-12 mb-4"
                                        type="text"
                                        placeholder="votre poste"
                                        name="poste"
                                        onChange={(e) => { setPoste(e.target.value); }}
                                    />
                                    <Button className="btn btn-md col-md-4 color_admin"
                                        type="submit"
                                    >
                                        Ajouter
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    );

}
export default Profil;
