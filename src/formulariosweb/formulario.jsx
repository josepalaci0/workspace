import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [contentComponent, SetContentComponent] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // Agregado

  const toggleCommentForm = () => {
    SetContentComponent(!contentComponent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };
    try {
      const serverResponse = await axios.post('https://2xgxyh-4000.csb.app/submit', data);

      if (serverResponse.status === 200) {
        setResponse(serverResponse.data.message);
        setIsVisible(true); // Mostrar el mensaje de respuesta

        // Limpiar los campos del formulario
      setName('');
      setEmail('');
      setMessage('');
      
        setTimeout(() => {
          setIsVisible(false);
          setResponse(''); // Restablecer el mensaje de respuesta
        }, 2000);
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 onClick={toggleCommentForm}>Formulario de Contacto 01 </h2>
      {contentComponent && (
        <div className="hidden-content">
          <div className="service">
            <form className='form' onSubmit={handleSubmit}>
            <label className='label'>Nombre: </label>
            <input className="input-field"
            required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />

            <label>Email:</label>
            <input className="input input-field "
            required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <label>Mensaje:</label>
            <textarea className="textarea"
            required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4" />

            <button className="submit-button" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
      {isVisible && (
        <div className='response'>
          <h3>{response}</h3>
        </div>
      )}
    </div>
  );
};

export default Formulario;
