import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ModalEmail({ show, onConfirm }) {
  return (
    <>
      <Modal show={show} onHide={onConfirm}>
        <Modal.Header>
          <Modal.Title>
            Your email has been sent. I will contact you shortly
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={onConfirm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
