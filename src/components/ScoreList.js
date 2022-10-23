import React from 'react'
import { Table } from 'react-bootstrap'
import Score from './Score'
// import Score from './Score'

export default function ScoreList({ APIData, setAPIData }) {
  return (
    // console.log('test in ScoreList', APIData),
    <>
      <div className='text-center mt-3 font-face-f1r'>
        <h1 className='font-face-f1b'>Score List</h1>
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
            {APIData.map((score) => {
              return (
                <Score score={score}
                  key={score.id}
                  APIData={APIData}
                />
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}