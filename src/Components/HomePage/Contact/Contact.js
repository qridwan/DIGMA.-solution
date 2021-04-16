import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="background">
  <div className="contact-container">
    <div className="screen">

      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +222 222 2222 22</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME"  />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button mr-3">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;