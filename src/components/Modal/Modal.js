import React from 'react';

const Modal = ({children, setShowModal}) => (
    <div className="modal">
        <div className="overlay" onClick={()=>setShowModal(false)}></div>
        {children}
    </div>
);

export default Modal