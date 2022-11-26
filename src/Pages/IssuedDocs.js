import React from 'react';
import './Issued.css';
import Card from '../components/UI/Card/Card';
import { Thead } from './Table/Thead';
import { Tbody } from './Table/Tbody';
import { FaDownload, FaTrash, FaEdit, FaEye, } from 'react-icons/fa';
// import { AddForm } from '../components/AddForm/AddForm';
export const IssuedDocs = () => {

  const tableData = [
    {
      id: 1,
      docName: 'Aadhar Card',
      docType: 'pdf',
      docSize: '55kb',
      docCreated: '07 Oct 2019',
      docLastUpdated: '08 Oct 2022',
      docAction: [<FaDownload />, <FaTrash />, <FaEdit />, <FaEye />]
    },
    {
      id: 2,
      docName: 'Pan Card',
      docType: 'pdf',
      docSize: '50kb',
      docCreated: '15 Oct 2020',
      docLastUpdated: '08 Oct 2022',
      docAction: [<FaDownload />, <FaTrash />, <FaEdit />, <FaEye />]
    }
  ];

  const tableBody = tableData.map((data) => (
    <Tbody
      key={data.id}
      id={data.id}
      name={data.docName}
      type={data.docType}
      size={data.docSize}
      createdOn={data.docCreated}
      updatedOn={data.docLastUpdated}
      action={data.docAction}
    />
  ));

  return (
    <div className="container1">
      {/* <AddForm/>   */}
      <h2 className="heading-secondary">You have Issued 2 Documents</h2>
      <Card className="card-container">
        <div className="table-responsive">
          <table className="table align-middle table-nowrap mb-0">
            {/* <TableHead/> */}
            <Thead />
            <tbody>
              {/* <Tbody /> */}
              {tableBody}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
