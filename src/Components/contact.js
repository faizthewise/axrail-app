import React from 'react';




const Contact = ({name,number}) => {
  const profileImage = "https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png";


  return(
    <div className="Contact-container">
      <div className="col-3">
        <img
          src={profileImage}
          alt="default"
          className="img-fluid"
          style={{width:50}}
          />
        </div>
      <div className="col-9" style={{padding:10}}>
          <p className="detail name">{name}</p>
          <p className="detail phone">{number}</p>
      </div>

    </div>
  );
}

export default Contact;
