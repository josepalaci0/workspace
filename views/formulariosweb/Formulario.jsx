import React, { useState } from 'react';
import './Formulario.css'; // Importa los estilos CSS

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contentComponent, SetContentComponent] = useState(true);

  const toggleCommentForm = () => {
    SetContentComponent(!contentComponent);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    // Aquí puedes realizar acciones como enviar los datos al servidor
  };

  return (
    <div className="form-container">
      <h2 onClick={toggleCommentForm}>Formulario de Contacto 01 </h2>
      {contentComponent && (<div className="hidden-content">
        <div className="service">
          <form className='form' onSubmit={handleSubmit}>
            <label className='label'>
              Nombre:
              <input className="input-field" required type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <label>
              Email:
              <input className="input input-field " required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Mensaje:
              <textarea className="textarea" required value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </label>
            <button className="submit-button" type="submit">Enviar</button>
          </form>
        </div>
      </div>)}
      
    </div>
  );
};


