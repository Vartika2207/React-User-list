import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}> </div>
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {/* Now the createPortal method takes two arguments.
            --> The first one is React node that should be rendered as jsx(ie. in tags).
            --> The second argument is a pointer to that container in the real 
            DOM where this elements should be rendered in.
            --> {} bcz we are calling js code here
            */}
           {ReactDOM.createPortal(
              <Backdrop onConfirm={props.onConfirm}/>,
              document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
              <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, 
              document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default ErrorModal;