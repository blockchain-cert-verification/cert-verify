import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 7em;
  margin-right: 6em;
`; 
// export const View = () => (
//   <Wrapper>
//     <h2>View Page</h2>
//   </Wrapper>
// )

function View(){
  const [data, setData] = useState([{
    firstname : '',
    lastname : '',
    organization: '',
    coursename: '',
    duration: '',
    emailId : '',
    assignedOn: '',
    _id :''
  }])

  useEffect(() => {
    fetch("/cert").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setData(jsonRes));
  })

  return <Wrapper>
    <h1>View Data</h1>
    {data.map( d => 
        <div> 
          <h1>Name : {d.firstname} {d.lastname}</h1>
          <p>Certificate ID : {d._id}</p>
          <p></p>

        </div>
      )}
  </Wrapper>  
    

}

export default View;

