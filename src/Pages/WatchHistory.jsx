import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { getHistoryAPI,removeHistoryAPI } from '../services/allAPI';

function WatchHistory() {

const [history,setHistory]=useState([])
useEffect(()=>{
getHistory()
},[])
const getHistory=async()=>{
  const result=await getHistoryAPI()
  if(result.status==200){
    setHistory(result.data)
  }
  else{
    console.log("API FAILED");
    console.log(result.message);
  }
}
const removedHistroyItem=async(id)=>
{
  await removeHistoryAPI(id)
  getHistory()
}



return (

    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'} style={{textDecoration:'none', color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
      </div>
      <div className='container mt-5'>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Video Caption</th>
            <th>URL </th>
            <th>Time Stamp</th>
            <th><i class="fa-solid fa-ellipsis"></i></th>
          </tr>
        </thead>
        <tbody>
        {history?.length>0? history?.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button onClick={()=>removedHistroyItem(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
          )) :
            <p>Your Watch History is Empty!!!</p>
          }
        </tbody>
      </Table>
      </div>
    </>
  )
}

export default WatchHistory