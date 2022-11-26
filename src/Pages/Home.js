import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Assets/aadhaar.png';
import image1 from '../Assets/pan_card.png';
import classes from './Home.module.css';
import { CardDocs } from './HomeCards/CardDocs';


export const Home = (props) => {

  const cardData = [
    {
      id: 1,
      image: image,
      name: 'Aadhaar card',
      num: 428056234256,
      desc: 'Aadhaar ,Unique identification Authority'
    },
    {
      id: 2,
      image: image1,
      name: 'Pan card',
      num: 'CLLPDE2373E',
      desc: 'Income Tax Department'
    }
  ];

  const cardDocsList = cardData.map((list) => (
    <CardDocs
      key={list.id}
      id={list.id}
      image={list.image}
      name={list.name}
      num={list.num}
      desc={list.desc}
    />
  ));

  return (
    <React.Fragment>
      <div className="container1">
        <h3 className="heading-secondary">Welcome here, Vikash Dagar ! </h3>
        <p className="sub-heading" style={{ color: "#111" }}>Here you can save yous Documents digitally</p>
      </div>
      <div className="container1">
        <div className={classes.heading_container}>
          <h2 className="heading-tertiary">Your Issued Docs</h2>
          <Link className="heading-tertiary" to=''>View All (2)</Link>
        </div>

        <div className={classes.card_holder}>
          {/* <CardDocs /> */}
          {cardDocsList}
        </div>
      </div>

      <div className="container1">
        <div className={classes.heading_container}>
          <h2 className="heading-tertiary">Your Issued Docs</h2>
          <Link className="heading-tertiary" to=''>View All (2)</Link>
        </div>

        <div className={classes.card_holder}>
          {/* <CardDocs /> */}
          {cardDocsList}
        </div>

      </div>
    </React.Fragment>
  )
}

