import { useState, useEffect } from 'react';
import {collection, query, orderBy, where, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../config-files/firebase';
import '../css/homedashboard.css';
import Input from '../component_reuseable/Input';
import NavbarDashbord from './NavbarDashbord';
import { ToastContainer, toast } from 'react-toastify';





export default function NosCv() {

    const [postulant, setPostulant] = useState([]);
    const [filter, setFilter] = useState("");


    useEffect(() => {
        const q = query(collection(db, 'Postulant'), where("statut", "==", "Candidat"), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            console.log(querySnapshot.docs)
            setPostulant(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))

        })

    }, [])

      

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

    const notifyClient = () =>
        toast.success("Ce candidat est maintenant un client confirmé !", {
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

    const handleDelete = async (id) => {
        const postDocRef = doc(db, 'Postulant', id)
        try {

            await deleteDoc(postDocRef)
            notifyDelete();

        } catch (err) {
            alert(err)
        }
    }


    const handlePay = async (id) => {
        try {
            await updateDoc(doc(db, 'Postulant', id), {

                statut: "Client"

            })
            notifyClient();

        } catch (err) {
            alert(err)
        }

    }
    

    return (

        <div className='container'>
            <NavbarDashbord />
            <div className="wrap-Home-Dashboard">
                <div className="table">
                    <div className="table_header">
                        <h1>{postulant.length} CV</h1>
                        <form action="/" >
                            <div className="form-inline">
                                <div>
                                    <Input className=" mx-sm-2"
                                        type="search"
                                        value={filter}
                                        placeholder="Recherche"
                                        onChange={(e) => setFilter(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="table_section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Cv</th>
                                    <th>Nom</th>
                                    <th>Pays d'origine</th>
                                    <th>Téléphone</th>
                                    <th>Poste</th>
                                    <th>Pays</th>
                                    <th>Procedure</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {postulant
                                    .filter((post) => {
                                        return filter.toLowerCase() === ''
                                            ? post
                                            : post.data.nom?.toLowerCase().includes(filter) ||
                                            post.data.type_emplois?.toLowerCase().includes(filter) ||
                                            post.data.type_de_procedure?.toLowerCase().includes(filter);
                                    }).map((post, index) => {
                                        return (
                                            <tr key={post.id}>
                                                <td className='d-none'>{post.id}</td>
                                                <td><i className="fa-solid fa-file-pdf"></i></td>
                                                <td>{post.data.nom}</td>
                                                <td>{post.data.pays_origine}</td>
                                                <td>{post.data.phone}</td>
                                                <td>{post.data.type_emplois}</td>
                                                <td>{post.data.pays_imigrations}</td>
                                                <td>{post.data.type_de_procedure}</td>
                                                <td>
                                                    <a type="button" class="btn btn-sm color1"
                                                        href={post.data.cv_postulant}
                                                        target="_blank"
                                                        rel="noopener, noreferrer"
                                                        data-toggle="tooltip" data-placement="left"
                                                        title="Télécharger le CV">
                                                        <i className="fa-solid fa-download"></i>
                                                    </a>  |
                                                    <button className="btn btn-sm color2"
                                                        onClick={() => handleDelete(post.id)}
                                                        data_toggle="tooltip"
                                                        data_placement="top"
                                                        title="Supprimer cette personne">
                                                        <i className="fa-sharp fa-solid fa-trash"></i>
                                                    </button> |
                                                    <button className="btn btn-sm color3"
                                                        onClick={() => handlePay(post.id)}
                                                        data_toggle="tooltip"
                                                        data_placement="top"
                                                        title="Client qui a déja payer">
                                                        <i className="fa-solid fa-coins"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                            </tbody>
                        </table>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>


    )
}
