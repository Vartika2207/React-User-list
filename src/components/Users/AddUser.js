import React, { useState, useRef} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //now using refs, state not needed
    // const [enteredUsername, setEnteredUsername] = useState(''); //js syntax for arry de-structing 
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    //     console.log("event in usernameCH in AddUse.jd " + event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    //     console.log("event in ageCH in AddUse.jd " + event.target.value);
    // };


    const addUserHandler = (event) => {
        event.preventDefault();
        
        const enteredNameRef = nameInputRef.current.value;
        const enteredAgeRef = ageInputRef.current.value;
       
        if(enteredNameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value).'
            });
            return; 
        }
        if(+enteredAgeRef < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (age>0).'
            });
            return;
        }
        
        // console.log("event in AddUserH ", enteredUsername, " ", enteredAge);
        // setEnteredUsername('');
        // setEnteredAge('');

        props.onAddUser(enteredNameRef, enteredAgeRef); 
        //for reset values after submit, by DOM manipulation
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
       <Wrapper>
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
                // value={enteredUsername} 
                // onChange={usernameChangeHandler}
                ref={nameInputRef} //connecting ref created above with jsx code which is rendered by same component
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                type="number" 
                id="age" 
                // value={enteredAge} 
                // onChange={ageChangeHandler}
                ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
       </Wrapper>
    );
};

export default AddUser;