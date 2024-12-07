import React from 'react'

const Message = ({ nombre, direccion }) => {
    return (
      <>
        <div>
          <h4>Gracias {nombre}!, </h4>
          <h4>Te contactaremos cuando antes vía mail</h4>
        </div>
      </>
    );
  };

export default Message
