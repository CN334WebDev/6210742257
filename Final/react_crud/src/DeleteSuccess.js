import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeleteSuccess = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <p>Deleted Success!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button as={Link} to="/" variant="secondary">
            Back
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DeleteSuccess;
