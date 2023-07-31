import React, { useState, useEffect } from 'react';

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/chat')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserData;
