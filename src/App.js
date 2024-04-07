import './App.css';

import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bobby Hadz'},
    {id: 3, name: 'Carl'},
  ]);

  return (
    <div>
      {users.map(user => (
        // ✅ set `key` prop to a unique value
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
