import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { usersAPI } from '../rest/Endpoint';
// import { Navigate, useNavigate } from 'react-router-dom';

export default function LeaderBoard() {
  const [APIData, setAPIData] = useState([]);
  // const [retaking, setRetaking] = useState(null);
  let navigate = useNavigate();

  var lookup = {APIData};
  for (var i = 0, len = APIData.length; i < len; i++) {
    lookup[APIData[i].id] = APIData[i];
  }
  console.log(lookup[4]);


  useEffect(() => {
    console.log('inside useEffect');
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((response) => {
        setAPIData(response.data)
        console.log('Here is APIData', response.data)
      })
  }, [])

  const getData = () => {
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((getData) => {
        setAPIData(getData.data);
      }).then(() => {
        navigate('/leaderboard');
      })
  }

  const onEdit = () => {
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((getData) => {
        setAPIData(getData.data);
      }).then(() => {
        navigate('/quiz');
      })
    // render component, pass in user data
    // condition to determine if instance of quiz component exists
    // user.id === quiz => render existing quiz
  }

  const onDelete = async (id) => {
    console.log('in delete function');
    try {
      const resp = await fetch(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('Delete resp:', resp)
      // return await resp.json();
    } catch (err) {
      console.log(
        "Oops, looks like onDelete had an issue.", err);
    }
    console.log('before navigate');
    getData();
  };

  // const onDelete2 = (event) => {
  //   event.preventDefault();
  //   console.log("onSubmit event", event);
  //   let id = usersAPI.id;
  //   usersAPI.apiDelete(id);
  // };


  // const result = APIData.filter(e => e.length - 1);
  // console.log('result', result)

  // const retakingQuiz = (id) => {
  //   setRetaking(id - 1);
  // }


  return (
    <>
      <div className='text-center mt-3 font-face-f1r'>
        <h1 className='font-face-f1b'>Leaderboard</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {APIData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.score}</td>
                  <td>
                    {/* <Button variant='warning' onClick={() => onEdit(data.id)}>Retake</Button> */}
                    {/* <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button> */}
                    {APIData && data.length - 1 ? (
                      <Button variant='warning' onClick={() => onEdit(data.id)}>Retake</Button>
                    ) : (
                      <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button>
                    )}
                  </td>
                </tr>
              )
            }, [])}
          </tbody>
        </Table>
      </div>
    </>
  )
}
