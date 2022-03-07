import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditSuccess = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <p>Edited Success!</p>
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

export default EditSuccess;
