import React from 'react';
import classes from './CardDocs.module.css';

export const CardDocs = (props) => {

    
    return (
        <React.Fragment>
            {/* <div className={classes.card_holder}> */}
                
                
                    <div className={classes.card_container}>
                        <div className={classes.card_data}>
                            <img src={props.image} alt="logo" />
                            <div className={classes.aadhar_container}>
                                <h3 className="tertiary-heading">{props.name}</h3>
                                <span className='text-secondary'>{props.num}</span>
                            </div>
                        </div>
                        <div className="sub-heading text-secondary">
                            {props.desc}
                        </div>
                    </div>
                
                
                {/* <div className={classes.card_container}>
                    <div className={classes.card_data}>
                        <img src={image} alt="logo" />
                        <div className={classes.aadhar_container}>
                            <h3 className="tertiary-heading">Aadhaar card</h3>
                            <span>********</span>
                        </div>
                    </div>
                    <div className="sub-heading">
                        Aadhaar ,Unique identification Authority
                    </div>
                </div>

                <div className={classes.card_container}>
                    <div className={classes.card_data}>
                        <img src={image} alt="logo" />
                        <div className={classes.aadhar_container}>
                            <h3 className="tertiary-heading">Aadhaar card</h3>
                            <span>********</span>
                        </div>
                    </div>
                    <div className="sub-heading">
                        Aadhaar ,Unique identification Authority
                    </div>
                </div> */}
            {/* </div> */}
        </React.Fragment>
    )
}
