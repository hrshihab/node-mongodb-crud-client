import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
  const user = useLoaderData();
  const [users,setUsers] = useState(user);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(users);

    fetch(`http://localhost:5000/users/${users._id}`, {
      method:'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      
      body:JSON.stringify(users)
    })
    .then(res=>res.json())
    .then(result => {
      if(result.modifiedCount > 0 ) {
        alert('updated')
        console.log(result);
      }
     
    })
    
  }
  const handleChange = event => {
 const field = event.target.name;
 const value = event.target.value;
// users[field] = value;  //immute k directly mute kore dey..state e korbo na
  const newUser = {...users};
  newUser[field] = value;
  setUsers(newUser);

  }
  return (
    <div>
      <h1>Update user Field </h1>
      <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" defaultValue={users.name} name="name" id="" placeholder='Name' required />
          <br />
          <input onChange={handleChange} type="text" defaultValue={users.address} name="address" id="" placeholder='Address' required/>
          <br />
          <input onChange={handleChange} type="email" defaultValue={users.email} name="email" id="" placeholder='Email' required/>
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default UpdateUser;