import React from "react";
import classes from './Card.module.css'


const Card = (props) => {

    return (
        // we are accepting and setting-up className as props here, and we can have is as propsClass 
        //and mention same in parent class (i.e. AddUser.js)
        <div className={`${classes.card} ${props.className}` }>
            {/* its in {} bcz its not jsx, is js code */}
            {props.children} 
        </div>
    );
};

export default Card;
