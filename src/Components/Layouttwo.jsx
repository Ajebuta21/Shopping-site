import React from 'react'
import Navbartwo from './Navbartwo';
import Search from './Search';

const Layouttwo = ({children}) => {
  return (
    <>
          <Navbartwo />
          <Search/>
      {children}
    </>
  );
}

export default Layouttwo