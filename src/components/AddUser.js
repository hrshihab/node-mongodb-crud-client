import React, { useState } from 'react';

const AddUser = () => {
  const [users,setUsers] = useState({});
  const handleSubmit = event => {
    event.preventDefault();
    console.log(users);
    fetch('http://localhost:5000/addUsers', {
      method:'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(users)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error=> {
      console.error(error)
    }) 

  }
  const handleBlur = event => {
 const field = event.target.name;
 const value = event.target.value;
// users[field] = value;  //immute k directly mute kore dey..state e korbo na
  const newUser = {...users};
  newUser[field] = value;
  setUsers(newUser);

}
  return (
    <div>
      
        <h2>Add user</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleBlur} type="text" name="name" id="" placeholder='Name' required />
          <br />
          <input onChange={handleBlur} type="text" name="address" id="" placeholder='Address' required/>
          <br />
          <input onChange={handleBlur} type="email" name="email" id="" placeholder='Email' required/>
          <br />
          <button type="submit">Submit</button>
        </form>
      
    </div>
  );
};

export default AddUser;