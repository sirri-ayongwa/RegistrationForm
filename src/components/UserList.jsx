import React from 'react';

function UserList({ users }) {
  return (
    <div className="user-list-container">
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
