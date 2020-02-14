import React from 'react';
import '../App.css';
import ContactList from '../Components/contactList';


function Landing() {
  return (
      <div className="App" style={{marginTop:50}}>
        <ContactList />
      </div>
  );
}

export default Landing;
