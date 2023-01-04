import React, { useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState(''); //js syntax for arry de-structing 
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        console.log("event in usernameCH in AddUse.jd " + event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        console.log("event in ageCH in AddUse.jd " + event.target.value);
    };


    const addUserHandler = (event) => {
        event.preventDefault();
       
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value).'
            });
            return; 
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (age>0).'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        console.log("event in AddUserH ", enteredUsername, " ", enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
       <div>
        {error && (
          <ErrorModal 
            title={error.title} 
            message={error.message} 
            onConfirm={errorHandler}
          />
        )}

        <Card className={classes.input}>
            {/* onSubmit is a prop, and the other in {} is pntr to fnctn, not fnctn */}
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User name</label>
                <input 
                type="text" 
                id="username" 
                value={enteredUsername} 
                onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                type="number" 
                id="age" 
                value={enteredAge} 
                onChange={ageChangeHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
       </div>
    );
};

export default AddUser;