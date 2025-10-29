import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1> <br></br>
      <Link to="/sobre">Sobre</Link>
      </div>
  );
}

export default Home;
