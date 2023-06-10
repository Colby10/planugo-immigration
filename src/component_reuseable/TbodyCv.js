import React from 'react'
import Button from './Button'

export default function TbodyCv() {
    return (
        <>
            <tr>
                <td>1</td>
                <td>Pdf</td>
                <td>Ouvrier</td>
                <td>Adama Traore</td>
                <td>Mali</td>
                <td>600 000 000</td>
                <td>Canada</td>
                <td>Arrima</td>
                <td>
                    <Button className="btn btn-sm"
                        icon={<i className="fa-solid fa-download"></i>}>
                    </Button> |
                    <Button className="btn btn-sm" data_toggle="modal" data_target="#Supprimer"
                        icon={<i className="fa-sharp fa-solid fa-trash"></i>}>
                    </Button>
                </td>
            </tr>
        </>
    )
}
