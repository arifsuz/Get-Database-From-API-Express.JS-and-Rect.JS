import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const endpoint = "http://localhost:3030/api/users";
  const[users, setUsers] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log("Error fetching users:", err);
    } 
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <>
      <h1>GET USERS DATA FROM API</h1>
      {users && users.data ? (
        users.data.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
        </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
