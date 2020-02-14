import React, {useState} from 'react';
import Contact from './contact';
import * as firebase from 'firebase';
import { css } from "@emotion/core";
import { BounceLoader } from "react-spinners";
import {Link} from 'react-router-dom';


const ContactList = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


    const db = firebase.firestore();
    var cn = [];
    db.collection("phonebook")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            cn.push(doc.data());
        })
        setContact(cn);
        setLoading(false);
    });

  if(loading===true){
      return(<BounceLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#17a2b8"}
          loading={loading}
        />);
  }
  else{
    return(
      <div className="ContactList-container">
        <Link to="add">
          <button type="button" className="btn btn-info btn-md" style={{marginBottom:40}}>
            Add Contact
          </button>
        </Link>
        {contact.map(contact =>
          <Contact
          key={contact.name}
          name={contact.name}
          number={contact.number}
          />)}
      </div>
    );
  }
}

export default ContactList;
