import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 7em;
  margin-right: 6em;
`; 
// export const View = () => (
//   const[cert, setNotes]
//   <Wrapper>
//     <h2>View Page</h2>

//   </Wrapper>
// )

function View() {
  const[data, setData] = useState([{
    firstname :'',
    lastname:'',
    organization:'',
    coursename:'',
    assignedOn:'',
    duration:'',
    emailId:'',
    _id:'' 
  }])

  useEffect(() => {
    fetch("/view").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setData(jsonRes));
  })

  return <Wrapper>
    <h1>View Data</h1>
    {data.map(d =>
    <div>
        <h1>{d.firstname} {d.lastname}</h1>
        <p>course : {d.coursename}</p>
        <p>organization : {d.organization}</p>
        {/* <p></p>coursename:'',
        <p></p>assignedOn:'',
        <p></p>duration:'',
        <p></p>emailId:'', */}
        <p>ID: {d._id} </p> 
    </div>
      )}
  </Wrapper>

}



export default View;