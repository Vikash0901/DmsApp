import React, {useState} from 'react';
import classes from './Addform.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

export const AddForm = (props) => {
    const [enteredUserName ,steEnteredUserName]=useState('');
    const [enteredAge ,steEnteredAge]=useState('');
    // const [error ,setError]=useState('');

    const userNameChangeHandler= event=>{
        steEnteredUserName(event.target.value);
    };
    const ageChangeHandler= event=>{
        steEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        console.log(enteredUserName , enteredAge);
        // props.onAddUser(enteredUserName ,enteredAge);

        steEnteredUserName('');
        steEnteredAge('');
    };
    

  return (
    <div>
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" 
                onChange={userNameChangeHandler}
                value={enteredUserName}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="text" onChange={ageChangeHandler}
                value={enteredAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>
  )
}
