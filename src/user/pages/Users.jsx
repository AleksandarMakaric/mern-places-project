import React from 'react';
// Self-created
import UsersList from '../components/UsersList';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Max Schwarz',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    places: 3
  }
]

const Users = () => {
  return <UsersList users={DUMMY_USERS} />;
};

export default Users;