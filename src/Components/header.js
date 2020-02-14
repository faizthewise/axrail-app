import React from 'react';


const Header = ({title}) =>{
  return(
    <div>
      <h1 style={headerStyle}>{title}</h1>
      <h5 style={{fontFamily: 'Open Sans Condensed'}}>By Faiz Hasnul</h5>
    </div>
  );
}

const headerStyle = {
  fontWeight:'bold',
  fontStyle: 'italic',
  fontFamily: 'Sriracha',
  fontSize: 60
}


export default Header;
