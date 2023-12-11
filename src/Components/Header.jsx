import React from 'react'
import { Navbar ,Container} from 'react-bootstrap'
function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder' style={{color:'white',fontSize:'25px'}}>
          <i class="fa-solid fa-cloud-arrow-up fa-beat me-3"></i>
         Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header