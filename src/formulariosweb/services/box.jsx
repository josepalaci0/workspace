import React from 'react';

const Box = ({ imageUrl, text }) => {
  return (
    <div className="box">
      <img src={imageUrl} alt="Imagen" />
      <p className="responsive-text">{text}</p>
    </div>
  );
};

export default Box;