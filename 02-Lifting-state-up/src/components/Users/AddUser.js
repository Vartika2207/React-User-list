import React, { useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState(''); //js syntax for arry de-structing 
    const [enteredAge, setEnteredAge] = useState('');


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
            return; 
        }
        if(+enteredAge < 1){
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        console.log("event in AddUserH ", enteredUsername, " ", enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };


    return (
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
    );
};

export default AddUser;