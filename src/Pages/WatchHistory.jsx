import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function WatchHistory() {
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
          <tr>
            <td>1</td>
            <td>Leo Trailer</td>
            <td><a href="https://youtu.be/Po3jStA673E?si=aiY9qvUX3PQWqLnh" target='_blank'>https://youtu.be/Po3jStA673E?si=aiY9qvUX3PQWqLnh</a></td>
            <td>13/12/2023</td>
            <td><Button></Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </>
  )
}

export default WatchHistory