import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // below we will take old list and append new element
    setUsersList((prevUsersList) => {
      return [
           ...prevUsersList, 
          {name: uName, age: uAge, id: Math.random().toString()}
             ];
    });
  };

  return (
    <>
    {/* <React.Fragment> or <Fragment> but import that alog with useState*/}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    {/*</React.Fragment>  */}
    </>
  );
}

export default App;
