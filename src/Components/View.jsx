import React, {useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import {getAllVideosAPI, updateCategoryAPI ,getAllCategoryAPI} from '../services/allAPI'


function View({uploadVideoResponse,setDropResponse}) {
const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  const [allVideos, SetAllVideos] = useState([])
  useEffect(() => {
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])
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
  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped=async(e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data}=await getAllCategoryAPI()
    const  selectedCategory=data.find(item=>item.id==categoryId)
    let result =selectedCategory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,CategoryName}=selectedCategory
    let newCategory={id,CategoryName,allVideos:result}
    console.log(newCategory);
    const res=await updateCategoryAPI(categoryId,newCategory)
 setDropResponse(res)
  }

  return (
    <>
      <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>{
        allVideos?.length > 0 ? allVideos.map
          (video => (<Col className='mb-2' sm={12} md={6} lg={4} xl={3}>
            <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
          </Col>)): <p className='fs-4 text-warning fw-bolder'>No-Video are uploaded yet!!!!!</p>


      }
      </Row>
    </>
  )
}

export default View