import React from 'react';
// Self-created
import UserItem from './UserItem';
// Styles
import './UsersList.css';

const UsersList = props => {
  if (props.users.length === 0) {
    return (
      <div className='center'>
        <h2>No users found.</h2>
      </div>
    )
  }

  return (
    <ul className='users-list'>
      {props.users.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  )
};

export default UsersList;