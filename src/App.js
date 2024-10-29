import React, { useState } from 'react';
import './App.css'; // CSS for styling
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]); // Shared user state for registered users
  const [showUserList, setShowUserList] = useState(false); // State to control user list visibility

  // Function to add new user to the list and toggle visibility
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setShowUserList(true); // Show the user list after adding a user
  };

  // Toggle user list visibility
  const handleToggleUserList = () => {
    setShowUserList(!showUserList);
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <UserForm onAddUser={addUser} onToggleUserList={handleToggleUserList} />
      {showUserList && <UserList users={users} />}
    </div>
  );
}

export default App;
