const Modal = ({ message, handleCloseModal }) => {
    return (
        <div className="modal" onClick={() => handleCloseModal(false)} >{message}</div>
    )
};

export default Modal;