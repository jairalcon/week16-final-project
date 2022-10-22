import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import QuizRetake from './QuizRetake';
// import { usersAPI } from '../rest/Endpoint';
// import { Navigate, useNavigate } from 'react-router-dom';

export default function Score({ APIData, setAPIData, score }) {
  // const [APIData, setAPIData] = useState([]);
  // const [isEditing, setEdit] = useState(false);
  // const [retaking, setRetaking] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((getData) => {
        setAPIData(getData.data);
      }).then(() => {
        navigate('/scorelist');
      })
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
    navigate('/')
  };

  // function to hide edit button if not last comment
  const hideEdit = () => {
    if (score.id === APIData[APIData.length - 1].id) { //if comment id is equal to last comment id
      return true;
    } else {
      return false;
    }
  };


  const handleEdit = () => {
    navigate('/quiz-retake')
  }


  return (
    <>
      <tr>
        <td>{score.id}</td>
        <td>{score.username}</td>
        <td>{score.score}</td>
        <td>
          {hideEdit() && 
            <Button variant='warning' onClick={handleEdit}>Retake</Button>}
          {hideEdit() && 
            <Button variant='danger' onClick={() => onDelete(score.id)}>Delete</Button>}
        </td>
      </tr>
    </>
  )
}


  // let lookup = { APIData };
  // for (var i = 0, len = APIData.length; i < len; i++) {
  //   lookup[APIData[i].id] = APIData[i];
  // }
  // console.log(lookup[4]);



  // const onDelete2 = (event) => {
  //   event.preventDefault();
  //   console.log("onSubmit event", event);
  //   let id = usersAPI.id;
  //   usersAPI.apiDelete(id);
  // };




    // const onEdit = () => {
  //   axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
  //     .then((getData) => {
  //       setAPIData(getData.data);
  //     }).then(() => {
  //       navigate('/quiz');
  //     })
  // }
    // render component, pass in user data
    // condition to determine if instance of quiz component exists
    // user.id === quiz => render existing quiz





  // useEffect(() => {
  //   console.log('inside useEffect');
  //   axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
  //     .then((response) => {
  //       setAPIData(response.data)
  //       console.log('Here is APIData', response.data)
  //     })
  // }, [])

