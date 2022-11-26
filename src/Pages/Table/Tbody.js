import React from 'react';
import '../Issued.css';
// import { FaDownload, FaTrash, FaEdit, FaEye, } from 'react-icons/fa';
import { Modal } from '../../components/Modal';


export const Tbody = (props) => {

    const tableAction = props.action.map((docIcon) => (
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {docIcon}
                <Modal />
            </button>
    ))

    return (
        <React.Fragment>
            
            <tr>
                <td>
                    <div className="form-check font-size-16">
                        <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                        <label className="form-check-label" for="transactionCheck02"></label>
                    </div>
                </td>
                <td><a href="javascript: void(0);" className="text-body fw-bold">{props.name}</a> </td>
                <td>{props.type}</td>
                <td>{props.size}</td>
                <td>{props.createdOn}</td>
                <td><span className="">{props.updatedOn}</span></td>
                <td>{tableAction}</td>
            </tr>
            {/* <tr>
                    <td>
                        <div className="form-check font-size-16">
                            <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                            <label className="form-check-label" for="transactionCheck02"></label>
                        </div>
                    </td>
                    <td><a href="javascript: void(0);" className="text-body fw-bold">Aadhar card</a> </td>
                    <td>Neal Matthews</td>
                    <td>55kb
                    </td>
                    <td>
                        07 Oct, 2019
                    </td>
                    <td>
                        <span className="">08 Oct, 2020</span>
                    </td>

                    <td>
                        
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaTrash />
                            <Modal/>
                        </button>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaEdit/>
                            <Modal/>
                        </button>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaDownload/>
                            <Modal/>
                        </button>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaEye/>
                            <Modal/>
                        </button>

                    </td>
                </tr>
                 */}
           
        </React.Fragment >
    )
}
