import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateSuccess = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <p>Created Success!</p>
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

export default CreateSuccess;
