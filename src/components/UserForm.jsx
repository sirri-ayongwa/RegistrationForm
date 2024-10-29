import React, { useState } from 'react';

function UserForm({ onAddUser, onToggleUserList }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Async form submission with user data capture
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      );
      
      if (response.success) {
        const newUser = { id: Date.now(), name, email };
        onAddUser(newUser); // Pass new user data up to App.js
        
        setSuccessMessage('User successfully registered!');
        setName(''); // Clear input fields
        setEmail('');

        // Clear success message after 2 seconds
        setTimeout(() => setSuccessMessage(''), 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {loading ? 'Submitting...' : 'Register'}
        </button>
      </form>
      
      {/* Display success message */}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* View Registered Users Button */}
        <button onClick={onToggleUserList} className="view-users-btn">
          View Registered Users
        </button>
    </div>
  );
}

export default UserForm;
