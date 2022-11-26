import React, { useState, useEffect } from 'react';
import './Drive.css';
import Multiselect from 'multiselect-react-dropdown';
import Card from '../components/UI/Card/Card';

export const Drive = (props) => {
    const data = [
        // 'Png', 'Jpg', 'Pdf'
        { Country: 'Png', id: 1 },
        { Country: 'Jpg', id: 2 },
        { Country: 'Pdf', id: 3 }
    ]
    const [options] = useState(data);
    const [selctedValue, setSelectedValue] = useState([]);
    // const [selectedValueTouched, setSelectedValueTouched] = useState(false);

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredMin, setEnteredMin] = useState('100');
    const [enteredMinTouched, setEnteredMinTouched] = useState(false);

    const [enteredMax, setEnteredMax] = useState('2000');
    const [enteredMaxTouched, setEnteredMaxTouched] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const enteredMinIsValid = enteredMin.trim() >= 100;
    const enteredMaxIsValid = enteredMax.trim() <= 2000;

    const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
    const minInputIsValid = !enteredMinIsValid && enteredMinTouched;
    const maxInputIsValid = !enteredMaxIsValid && enteredMaxTouched;

    useEffect(() => {
        if (nameInputIsValid && minInputIsValid && maxInputIsValid ) {
            setFormIsValid(true);
        }
        
    }, [nameInputIsValid, minInputIsValid, maxInputIsValid ])

    const selectHandler = (event) => {
        const value= setSelectedValue(event);
        // console.log(event);
        if(value !== ''){
            // setSelectedValueTouched(true);
            console.log('yes it is correct'); 
        }
    }
    const removeHandler =(event)=>{
        console.log(event);
    }
    const selectBlurHandler = () => {
        // setSelectedValueTouched(true);   
    }
    const nameInputHandler = (event) => {
        setEnteredName(event.target.value);
        // console.log(event);
    }
    const nameBlurHandler = () => {
        setEnteredNameTouched(true);
    }
    const enteredMinInput = (event) => {
        setEnteredMin(event.target.value);
    }
    const enteredMinBlurHandler = () => {
        setEnteredMinTouched(true);
    }
    const enteredMaxInput = (event) => {
        setEnteredMax(event.target.value);
    }
    const enteredMaxBlurHandler = () => {
        setEnteredMaxTouched(true);
    }
    const documentSubmitHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);
        setEnteredMinTouched(true);
        setEnteredMaxTouched(true);
        // console.log(nameInputIsValid, minInputIsValid, maxInputIsValid);

        if (!enteredNameIsValid && !enteredMinIsValid && !enteredMaxIsValid ) {
            return;
        }

        setEnteredName('');
        setEnteredMin('100');
        setEnteredMax('2000');

        setEnteredNameTouched(false);
        setEnteredMinTouched(false);
        setEnteredMaxTouched(false);
        // setSelectedValueTouched(false);

        console.log('form submitted');
        console.log(selctedValue, enteredName, enteredMax, enteredMin);
    }

    const nameInputClasses = !nameInputIsValid ? 'form-control is-invalid' : 'form-control';
    const minInputClasses = !minInputIsValid ? 'form-control is-invalid' : 'form-control';
    const maxInputClasses = !maxInputIsValid ? 'form-control is-invalid' : 'form-control';

    return (
        <div className='container1' style={{ maxWidth: '100rem' }}>
            <Card className="card-container">
                <form onSubmit={documentSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="DocsName" className="form-label ">Document Name</label>
                        <input
                            name='docsname'
                            onChange={nameInputHandler}
                            onBlur={nameBlurHandler}

                            value={enteredName} type="text"
                            className={nameInputClasses} id="DocsName" aria-describedby="emailHelp" />
                        {nameInputIsValid &&
                            (<p className='error-text'>Not valid</p>
                            )}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="DocsFormat" className="form-label">Document Name</label>
                        <Multiselect
                            name='formatSelect'
                            // isObject={false}
                            // onRemove={(event) => { console.log(event) }}
                            onRemove={removeHandler}
                            // onSelect={(event) => { console.log(event) }}
                            onSelect={selectHandler}
                            // onChange={selectHandler}
                            // onBlur={selectBlurHandler}
                            options={options}
                            showCheckbox
                            id='DocsFormat' displayValue='Country'
                        />
                    </div>

                    <div className='row g-3 my-3'>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">Min-size</label>
                            <input
                                name='minval'
                                onChange={enteredMinInput}
                                onBlur={enteredMinBlurHandler}
                                value={enteredMin}
                                type="number"
                                className={minInputClasses}
                                min='100' id="firstName" placeholder="" />
                            {minInputIsValid &&
                                (<p className='error-text'>Min Value is not Valid</p>
                                )}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">Max-size</label>
                            <input
                                name='maxval'
                                onChange={enteredMaxInput}
                                onBlur={enteredMaxBlurHandler}
                                value={enteredMax}
                                type="number"
                                className={maxInputClasses}
                                id="firstName" max='2000' placeholder="" />
                            {maxInputIsValid && (<p className='error-text'>Max value is not valid</p>
                            )}
                        </div>
                    </div>
                    <button
                        // disabled={!formIsValid} 
                        type="submit"
                        className="btn btn-primary py-2 px-3"
                        style={{ backgroundColor: '#0a4362' }}>Submit</button>
                </form>
            </Card>
        </div >
    )
}
