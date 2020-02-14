import React,{useState} from 'react';
import * as firebase from 'firebase';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router';




const AddContact = () => {
  const { handleSubmit, register, errors } = useForm();
  const [redirect,setRedirect] = useState(false);


  const onSubmit = values => {
    const db = firebase.firestore();
    db.collection("phonebook").add({
    name: values.name,
    number: values.number
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    setRedirect(true);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
  };

  if(redirect){
    return <Redirect to="/" />;
  }
  return (
    <div style={{marginTop:40}}>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input className="item" type="text" placeholder="Name" name="name" ref={register({required: 'Required', maxLength: 80})} />
      {errors.name && errors.name.message}
      <input className="item" type="tel" placeholder="Mobile number" name="number" ref={register({required: 'Required', maxLength: 12, pattern: {
            value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            message: "invalid phone number"
          }})} />
      {errors.number && errors.number.message}
      <input className="item" type="submit" className="btn btn-primary" />
    </form>
    </div>
  );
}

export default AddContact;
