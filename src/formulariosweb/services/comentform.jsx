import React, { useState } from 'react';
import axios from 'axios';

function ComentForm() {
  const [comment, setComment] = useState('');
  const [response, setResponse] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { comment };
    try {
      const serverResponse = await axios.post('https://2xgxyh-4000.csb.app/submit', data);

      if (serverResponse.status === 200) {
        setResponse(serverResponse.data.message);
        setIsVisible(true);

        // Limpiar el campo de comentario después de enviar
        setComment('');

        // Agregar el nuevo comentario al array de comentarios
        setComments([...comments, comment]);

        setTimeout(() => {
          setIsVisible(false);
          setResponse('');
        }, 2000);
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('An error occurred:', error);
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

      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment-box">
            <div className="user-avatar"></div>
            <div className="comment-content">
              <div className="comment-text">{comment}</div>
              
              <div className="comment-actions">
                <button>Me gusta</button>
                <button>Responder</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComentForm;
