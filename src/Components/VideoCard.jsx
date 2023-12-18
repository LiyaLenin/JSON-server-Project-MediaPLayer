import React , {useState} from 'react'
import { Card,Modal } from 'react-bootstrap'


function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <Card>
      <Card.Img onClick={handleShow} height={'350px'} variant="top" src="https://pbs.twimg.com/media/Fzh7EcVaAAAsBkC.jpg:large" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>Video Titile</h6>
          <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak?autoplay=1" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullScreen></iframe>

        </Modal.Body>
      </Modal>


    </>
  )
}

export default VideoCard