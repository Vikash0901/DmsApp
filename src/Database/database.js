import React, { useState, useEffect } from 'react';
import './Issued.css';
import Card from '../components/UI/Card/Card';
import { Thead } from './Table/Thead';
import { Tbody } from './Table/Tbody';
import { FaDownload, FaTrash, FaEdit, FaEye, } from 'react-icons/fa';
// import { json } from 'react-router-dom';
export const IssuedDocs = () => {
  const [state, setState] = useState('');
  // const [error, setError] = useState('');
  const [cardData, setCardData]= useState([]);

  
  // calling api for token
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json", 'Access-Control-Allow-Credentials', true);

  let raw = JSON.stringify({
    "publickey": "VdM9M8xGRv6dsFeg8y+qtdg03cc=",
    "privatekey": "9QGWb803Inkm3huCg+zUQImwYPjCG5C/NCSOTBmesw8=",
    "sp_tag": "HSC1234"
  });

  /// calling api for data
 

  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    CORS: true,
    crossDomain: true,
    redirect: 'follow'
  };


  useEffect(() => {
    fetch("http://192.168.29.183:3800/api/v1/login", requestOptions)
      .then(response => response.text())
      // .then(result => console.log(JSON.parse(result).token))
      .then(result => setState((JSON.parse(result).token)))
      .catch(error => console.log('error', error))
  }, [requestOptions])
  console.log(state);

  let myHeaders1 = new Headers();
  // myHeaders1.append("Authorization", `"Bearer" ${state}`);
  myHeaders1.append("Authorization", "Bearer" + state );

  let requestOptions1 = {
    method: 'GET',
    headers: myHeaders1,
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("http://192.168.29.183:3800/api/v1/doc/show-all-docs/3/", requestOptions1)
      // .then(response => response.text())
      .then(response => response.json())
      // .then(result => console.log(result))
      .then(result1 => {
        console.log(result1);
        console.log("done");
        //  return false;
        const transformedData = result1.doc.map((cardData1) => {
          return{
            id:cardData1._id,
            createdDate:cardData1.created_at,
            uploadDate:cardData1.document_id.uploadDate,
            name:cardData1.master_doc_id.name,
            size:cardData1.document_id.chunkSize,
            type:cardData1.document_id.contentType,
          }
        })
        setCardData(transformedData);
      })
      .catch(error => console.log('error', error));
      // console.log(cardData);
  },[])


  const tableData = [
    {
      id: 1,
      name: 'Aadhar Card',
      docType: 'pdf',
      docSize: '55kb',
      docCreated: '07 Oct 2019',
      docLastUpdated: '08 Oct 2022',
      docAction: [<FaDownload />, <FaTrash />, <FaEdit />, <FaEye />]
    },
    {
      id: 2,
      name: 'Pan Card',
      type: 'pdf',
      size: '50kb',
      createdDate: '15 Oct 2020',
      uploadDate: '08 Oct 2022',
      docAction: [<FaDownload />, <FaTrash />, <FaEdit />, <FaEye />]
    }
  ];

  const tableBody = tableData.map((data) => (
    <Tbody
      key={data.id}
      id={data.id}
      name={data.name}
      type={data.type}
      size={data.size}
      createdOn={data.createdDate}
      updatedOn={data.uploadDate} 
      // action={data.docAction}
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


const tableData = [
  {
    id: 1,
    name: 'Aadhar Card',
    docType: 'pdf',
    docSize: '55kb',
    docCreated: '07 Oct 2019',
    docLastUpdated: '08 Oct 2022',
    docAction: [<FaDownload />, <FaTrash />, <FaEdit />, <FaEye />]
  },
  {
    id: 2,
    name: 'Pan Card',
    type: 'pdf',
    size: '50kb',
    createdDate: '15 Oct 2020',
    uploadDate: '08 Oct 2022',
    docAction: [<FaDownload />, <FaTrash />, <FaEdit />, <FaEye />]
  }
];