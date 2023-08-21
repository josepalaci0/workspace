import React, { useState } from 'react';
import Gallery from './gallery';
import ComentForm from './comentform';
export function Homeservices() {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [contentComponent, SetContentComponent] = useState(true);

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };
  const toggleContentComponent = () => {
    SetContentComponent(!contentComponent);
  };

  return (
    <div className="form-container">
      <h2 className="display" onClick={toggleContentComponent}>Servicios </h2>
     {contentComponent &&(<div className="hidden-content">
        <div className="service">
          <h3>Servicio 1: Marketing Digital</h3>
          <p>Implementación de estrategias de marketing en línea para aumentar la visibilidad de tu negocio.</p>
          <Gallery/>
        </div>
        <h4 className="display-comment" onClick={toggleCommentForm}> [{showCommentForm ? 'Eliminar comentario' : 'Agregar comentario'}]</h4>
        {showCommentForm && (
          <ComentForm/>
        )}
      </div>)}
      
      
    </div>
  );
}