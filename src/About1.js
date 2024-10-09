import React from 'react';
import { useParams } from 'react-router-dom';
export const About = () => {
  const { pname } = useParams();
  return (
    <div>
      <h1> It is About Page and the name is {pname} </h1>
    </div>
  );
}
