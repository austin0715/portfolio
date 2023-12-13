import React, { useState } from 'react';
import '../styles/Contact.css';
/* axios for http requests */
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  const onChange = (event) => {
    const { name, value } = event.target;

    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const toggleForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.SITE_URL}/contact`,
      data: {
        name,
        email,
        message
      }
    }).then((res) => {
      if (res.data.msg === 'Success') {
        resetForm();
        // hide form and display "thank you" message
        toggleForm();
      } else {
        alert('Failed to send');
      }
    });
  };

  return (
    <div className="contact">
      <header>
        <h2 className="headings-font">Contact</h2>
        {showForm
          ? <p>
              Have a question or want to work together? Please email me and leave your contact
              information. I'll get back to you as soon as I can.
            </p>
          : ''
        }
      </header>
      
    </div>
  );
};

export default Contact;
