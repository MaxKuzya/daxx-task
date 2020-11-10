import React from 'react';
import { Home } from './Home.styled';
import { Link } from 'react-router-dom';

function HomeComponent() {
  return (
    <Home>
      <Link to='/login'>Go to login</Link>
    </Home>
  );
}

export default HomeComponent;
