import React, {useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='d-grid'>
          <Button className='btn btn-info' onClick={handleShow}>
        Category
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Category