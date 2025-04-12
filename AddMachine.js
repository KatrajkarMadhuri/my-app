import React, { useState } from 'react';
import axios from 'axios';
import './styles/AddMachine.css'

const AddMachine = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleNameChange = (event) => setName(event.target.value);
  const handleTypeChange = (event) => setType(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newMachine = {
      name: name,
      type: type,
      status: status,
    };

    try {
      const response = await axios.post('http://localhost:8282/api/machines', newMachine, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Machine added:', response.data);
      // Clear form fields
      setName('');
      setType('');
      setStatus('');
    } catch (err) {
      console.error('Error adding machine:', err);
      setError('Failed to add machine. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add a New Machine</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div><br></br>
        <div>
          <label>Type: </label>
          <input type="text" value={type} onChange={handleTypeChange} required />
        </div><br></br>
        <div>
          <label>Status: </label>
          <input type="text" value={status} onChange={handleStatusChange} required />
        </div><br></br>
        <button type="submit">Add Machine</button>
      </form>
    </div>
  );
};

export default AddMachine;
