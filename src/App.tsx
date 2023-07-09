import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Form from './components/Form';
import Card from './components/Card';
import './style.css';

interface User {
  avatar_url: string
  name: string
  blog: string
}

interface Response {
  avatar_url: string
  name: string
  blog: string
}

function App() {
  const [users, setUsers] = useState<Array<User>>([]);

  const fetchGithubUsers = (username: string) => {
    try {
      axios.get(`https://api.github.com/users/${username}`).then((resp: AxiosResponse<Response>) => {
        setUsers([...users, {
          avatar_url: resp.data.avatar_url,
          name: resp.data.name,
          blog: resp.data.blog,
        }])
      })
    } catch(e) {
      console.log('fetch github users error: ' + e);
    }
  }
  return (
    <div>
      <Form onSubmitEvent={fetchGithubUsers}/>
      {users.length > 0 && users.map((user) => (
        <Card key={user.name} {...user} />
      ))}
    </div>
  );
}

export default App;
