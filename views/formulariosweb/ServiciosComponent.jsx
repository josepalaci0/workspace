import React, { useState } from 'react';
import Gallery from './gallery';
export function ServiciosComponent() {
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
          <form className="comment-form hidden-content-coment">
            <div className="container-form">
              <div className="left-container">
                <textarea name="comment" rows="1" required></textarea>
              </div>
              <div className="right-container">
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        )}
      </div>)}
      
      
    </div>
  );
}

