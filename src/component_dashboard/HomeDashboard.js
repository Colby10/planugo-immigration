import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../config-files/firebase';
import '../css/homedashboard.css';
import Button from '../component_reuseable/Button';
import Thead from '../component_reuseable/Thead';
import ModalPublier from '../component_reuseable/ModalPublier';
import ModalSupprimer from '../component_reuseable/ModalSupprimer';
import ModalModifier from '../component_reuseable/ModalModifier';



export default function HomeDashboard(props) {

    const [offres, setOffres] = useState([])

    /* function to get all offre from firestore in realtime */

    useEffect(() => {
        const q = query(collection(db, 'offres'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setOffres(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);



    return (

        <div className='container'>
            <div className="wrap-Home-Dashboard">
                <div className="table">
                    <div className="table_header">
                        <h1> {offres.length} Offres en lignes</h1>
                        <Button type="button" className="btn btn-add- btn-sm"
                            data_toggle={"modal"} data_target={"#Publier"}>
                            <i className="fa-solid fa-plus"></i> Publier une offre
                        </Button>
                    </div>
                    <div>
                        <ModalPublier />
                    </div>

                    <div className="table_section">
                        <table>
                            <Thead
                                theadIndex="#"
                                theadOne="Pays"
                                theadTwo="Education"
                                theadTree="Poste"
                                theadFour="Langue"
                                theadFive="Salaire"
                                theadSix="Experience"
                                theadSeven="Actions"
                            />
                            <tbody>
                                {offres.map((tab, index) => (
                                    <tr key={index}>
                                        <td className='d-none'>{tab.id}</td>
                                        <td>{index + 1}</td>
                                        <td>{tab.data.pays}</td>
                                        <td>{tab.data.education}</td>
                                        <td>{tab.data.poste}</td>
                                        <td>{tab.data.langue}</td>
                                        <td>{tab.data.salaire}</td>
                                        <td>{tab.data.experience}</td>
                                        <td>
                                            <ModalModifier offre={tab} />

                                            <Button className="btn btn-sm color1" data_toggle="modal" data_target={"#edit-" + tab.id}
                                                icon={<i className="fa-solid fa-pen"></i>}
                                            >
                                            </Button> |

                                            <Button className="btn btn-sm btn color2" data_toggle="modal" data_target={"#delete-" + tab.id}
                                                icon={<i className="fa-sharp fa-solid fa-trash"></i>}
                                            >
                                            </Button>
                                            <ModalSupprimer offre={tab}
                                                question="Êtes-vous sûr?"
                                                message="Voulez-vous vraiment supprimer cette offre ? Ce processus est definitive."
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}
