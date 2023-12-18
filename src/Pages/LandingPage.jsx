import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container mt-5'>
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae doloremque excepturi iusto qui, corporis consequatur exercitationem illum dolorum porro voluptas error !</p>
          <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>
        </div>
        <div className="col">     </div>
        <div className="col-lg-6">
          <img className="impg-fluid" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" />
        </div>

      </div>
      <div className='features'>
        <h3 className='text-center mt-4'>Features</h3>
        <div className='cards mt-5 d-flex justify-content-between'>
          <Card style={{ width: '22rem' }}>
            <Card.Img style={{height:"500px", background:'black'}} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
            <Card.Body>
              <Card.Title>Managing videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://www.filmmakersacademy.com/wp-content/uploads/2018/09/music.gif" />
            <Card.Body>
              <Card.Title>Categorise videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{height:'500px'}} src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


        </div>



      </div>
      <div className="row mt-5 border rounded align-items-center p-5">
<div className="col-lg-5">
<h3>Simple Fast & Powefull</h3>
<p style={{textAlign:'justify'}} > <span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat nihil fugiat enim, explicabo quia delectus saepe tempore vel aut sapiente aperiam. Animi totam repellendus molestiae autem id minus magnam?</p>
<p style={{textAlign:'justify'}} > <span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat nihil fugiat enim, explicabo quia delectus saepe tempore vel aut sapiente aperiam. Animi totam repellendus molestiae autem id minus magnam?</p>
<p style={{textAlign:'justify'}} > <span className='fs-5'>Watch History</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat nihil fugiat enim, explicabo quia delectus saepe tempore vel aut sapiente aperiam. Animi totam repellendus molestiae autem id minus magnam?</p>





</div>
<div className="col-lg-1"></div>
<div className="col-lg-6">
<iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


      </div>

    </div>
  )
}

export default LandingPage