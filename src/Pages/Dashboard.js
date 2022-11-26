import React, { useState, useEffect } from 'react';
import './Drive.css';
import Multiselect from 'multiselect-react-dropdown';
import Card from '../components/UI/Card/Card';
// import { ClassNames } from '@emotion/react';

export const Dashboard = () => {

  const data = [
    // 'Png', 'Jpg', 'Pdf'
    { Country: 'Png', id: 1 },
    { Country: 'Jpg', id: 2 },
    { Country: 'Pdf', id: 3 }
  ]
  const [options] = useState(data);
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [selctedValue, setSelectedValue] = useState([]);
  const [selectedValueTouched, setSelectedValueTouched] = useState(false);

  const [enteredMin, setEnteredMin] = useState('100');
  const [enteredMinTouched, setEnteredMinTouched] = useState(false);

  const [enteredMax, setEnteredMax] = useState('2000');
  const [enteredMaxTouched, setEnteredMaxTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredMinIsValid = enteredMin.trim() >= 100;
  const enteredMaxIsValid = enteredMax.trim() <= 2000;
  const selctedValueIsValid = selctedValue.length != 0;

  const selectedInputIsValid = !selctedValueIsValid && selectedValueTouched;
  const enteredInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const minInputIsValid = !enteredMinIsValid && enteredMinTouched;
  const maxInputIsValid = !enteredMaxIsValid && enteredMaxTouched;


  useEffect(() => {
    if (enteredNameIsValid && enteredMinIsValid && enteredMaxIsValid && selctedValueIsValid) {
      setFormIsValid(true);
    }
  }, [enteredNameIsValid, enteredMinIsValid, enteredMaxIsValid, selctedValueIsValid])

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const nameBlurHandler = () => {
    setEnteredNameTouched(true);
  }
  const enteredMinBlurHandler = () => {
    setEnteredMinTouched(true);
  }
  const enteredMaxBlurHandler = () => {
    setEnteredMaxTouched(true);
  }
  const selectBlurHandler= ()=>{
    setSelectedValueTouched(true);
  }
  const selectHandler = (event) => {
    setSelectedValue(event);
  }
  const removeHandler = (event) => {
    const idArray = event.map((e) => {
      return e.id;
    })
    // setSelectedValue([]);
    console.log(idArray);

  }
  const enteredMinInput = (event) => {
    setEnteredMin(event.target.value);
  }
  const enteredMaxInput = (event) => {
    setEnteredMax(event.target.value);
  }

  const documentSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setSelectedValueTouched(true);
    setEnteredMaxTouched(true);
    setEnteredMinTouched(true);

    console.log(enteredName);
    console.log(selctedValue);
    console.log(enteredMin);
    console.log(enteredMax);
    console.log(enteredNameIsValid, enteredMinIsValid, enteredMaxIsValid, selctedValueIsValid);
    if (!enteredNameIsValid && !enteredMinIsValid && !enteredMaxIsValid && !selctedValueIsValid) {
      return;
    }
    // window.location.reload();

    console.log(enteredInputIsValid, selectedInputIsValid, minInputIsValid, maxInputIsValid);

    setEnteredName('');
    setSelectedValue([]);
    setEnteredMin('100');
    setEnteredMax('2000');

    setFormIsValid(false);

    setEnteredMaxTouched(false);
    setEnteredMinTouched(false);
    setSelectedValueTouched(false);
    setEnteredNameTouched(false);

    console.log('form submitted');

  }

  const nameInputClasses = !enteredInputIsValid ? 'form-label is-invalid' : 'form-label';
  const minInputClasses = !minInputIsValid ? 'form-label is-invalid' : 'form-label';
  const maxInputClasses = !maxInputIsValid ? 'form-label is-invalid' : 'form-label';
  const selectedInputClasses = !selectedInputIsValid ? 'form-label is-invalid' : 'form-label';


  return (
    <div className='container1' style={{ maxWidth: '100rem' }}>
      <Card className="card-container">
        <form onSubmit={documentSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="DocsName" className={nameInputClasses}>Document Name</label>
            <input
              name='docsname'
              onChange={nameInputHandler}
              onBlur={nameBlurHandler}

              value={enteredName} type="text"
              className='form-control' id="DocsName" aria-describedby="emailHelp" />
            {enteredInputIsValid &&
              (<p className='error-text'>Not valid</p>
              )}
          </div>
          <div className='mb-3'>
            <label htmlFor="DocsFormat" className={selectedInputClasses}>Document Name</label>
            <Multiselect
              name='formatSelect'
              // isObject={false}
              // onRemove={(event) => { console.log(event) }}
              onRemove={removeHandler}
              // onSelect={(event) => { console.log(event) }}
              value={selctedValue}
              onSelect={selectHandler}
              onBlur={selectBlurHandler}
              // onChange={selectHandler}
              options={options}
              showCheckbox
              id='DocsFormat' displayValue='Country'
            />
            {selectedInputIsValid &&
              (<p className='error-text'>Not valid</p>
              )}
          </div>

          <div className='row g-3 my-3'>
            <div className="col-md-6">
              <label htmlFor="firstName" className={minInputClasses}>Min-size</label>
              <input
                name='minval'
                onChange={enteredMinInput}
                onBlur={enteredMinBlurHandler}
                value={enteredMin}
                type="number"
                className='form-control'
                min='100' id="firstName" placeholder="" />
              {minInputIsValid &&
                (<p className='error-text'>Min Value is not Valid</p>
                )}
            </div>
            <div className="col-md-6">
              <label htmlFor="firstName" className={maxInputClasses}>Max-size</label>
              <input
                name='maxval'
                onChange={enteredMaxInput}
                onBlur={enteredMaxBlurHandler}
                value={enteredMax}
                type="number"
                className='form-control'
                id="firstName" max='2000' placeholder="" />
              {maxInputIsValid && (<p className='error-text'>Max value is not valid</p>
              )}
            </div>
          </div>
          <button
            disabled={!formIsValid}
            type="submit"
            className="btn btn-primary py-2 px-3"
            style={{ backgroundColor: '#0a4362' }}>Submit</button>
        </form>
      </Card>
    </div >
  )
}
