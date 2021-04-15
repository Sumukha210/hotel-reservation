import Modal from "react-bootstrap/Modal";

export interface IImageModal {
  src: string;
  show: boolean;
  handleClose(): void;
}

const ImageModal: React.FC<IImageModal> = ({ src, show, handleClose }) => {
  return (
    <>
      <Modal
        centered={true}
        size="lg"
        className="Gallery"
        show={show}
        onHide={handleClose}>
        <button
          className="btn btn-danger"
          data-toggle="modal"
          onClick={() => handleClose()}>
          X
        </button>
        <Modal.Body>
          {src && <img src={src} alt="modal image" className="img-fluid" />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;
