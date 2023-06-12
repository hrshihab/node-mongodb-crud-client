import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const displayUsers = useLoaderData();
  const [users,setUsers] = useState(displayUsers);
  const handleDelete = user => {
    const agree = window.confirm(`Are you want to delete ${user.name}`);
    if(agree)
     {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'DELETE'
    })
      .then(res=> res.json())
      .then(result => {
        
      if(result.deletedCount>0) {
        const newUser = users.filter(usr=> usr._id !== user._id);
        alert(`User deleted Successfully`)
        setUsers(newUser);
        console.log(newUser);
      }
      })
      .catch(err=> console.error(err))
     }
  }
  return (
    <div>
      <h2>This is home</h2>
      {
        users.map(user => <p key={user._id}>{user.name} {user.email} 
        <Link to={`/users/${user._id}`}>
        <button>Update</button> 
        </Link> <button onClick={()=> handleDelete(user)}>X</button> </p>)
      }
    </div>
  );
};

export default Home;