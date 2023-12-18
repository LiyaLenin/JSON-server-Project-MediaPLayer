import React, {useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import {getAllVideosAPI} from '../services/allAPI'


function View() {

  const [allVideos, SetAllVideos] = useState([])
  useEffect(() => {
    getAllUploadedVideos()
  },[])
  const getAllUploadedVideos = async () => {
    const result = await getAllVideosAPI()
    if (result.status === 200) {
      console.log(result)
      SetAllVideos(result.data);
    }
    else {
      console.log("API FAILED!!!!");
      SetAllVideos([])
    }

  }

  return (
    <>
      <Row>{
        allVideos?.length > 0 ? allVideos.map
          (video => (<Col className='mb-2' sm={12} md={6} lg={4} xl={3}>
            <VideoCard video={video} />
          </Col>)): <p className='fs-4 text-warning fw-bolder'>No-Video are uploaded yet!!!!!</p>


      }
      </Row>
    </>
  )
}

export default View