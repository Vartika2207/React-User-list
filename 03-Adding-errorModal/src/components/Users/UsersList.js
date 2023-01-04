import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {

    return (
        // className in below Card this way bcz ${props.className} is in Card.js
        <Card className={classes.users}>
            <ul>
                {/*users is a prop name, which can be any other name as well
                which holds arr of userdata (i.e jsx element) */}
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name}  {user.age} years old
                    </li>
                ))}
            </ul>
        </Card>
    );
};


export default UsersList;