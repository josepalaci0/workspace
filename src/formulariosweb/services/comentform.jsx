import React, { useState } from 'react';
import { DefaultAxios } from '../../petitions/axios';


function ComentForm() {
  const [comment, setComment] = useState('');
  const [response, setResponse] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { comment };
    const serverResponse = await DefaultAxios.Post('submit', data)   

    if (serverResponse.status === 200) {
      setResponse(serverResponse.data.message);
      setIsVisible(true);

      // Limpiar el campo de comentario después de enviar
      setComment('');

      setTimeout(() => {
        setIsVisible(false);
        setResponse('');
      }, 2000);
    } else {
      console.error('Failed to submit comment');
    }

  };

  return (
    <div>
      <form className="comment-form hidden-content-coment" onSubmit={handleSubmit}>
        <div className="container-form">
          <div className="left-container">
            <textarea
              name="comment"
              rows="1"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="right-container">
            <button type="submit">Enviar</button>
          </div>
        </div>
        {isVisible && <div className='response'>{response}</div>}
      </form>
    </div>
  );
}

export default ComentForm;
