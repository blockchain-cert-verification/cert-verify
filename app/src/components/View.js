import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { Redirect} from "react-router-dom";
// import verifycert from './verifycert';
import Display from './verifycert';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 7em;
  margin right: 2em;
`; 
// export const View = () => (
//   <Wrapper>
//     <h2>View Page</h2>
//   </Wrapper>
// )
// const thead = styled.div`
//   border: 1px solid #dddddd;
//   text-align: left;
//   padding: 8px;
// `;
// const t = styled.div`
//   font-family: arial, sans-serif;
//   border-collapse: collapse;
//   width: 100%;
// `;
// const trow = styled.div`
//   background-color: #dddddd;
// `;


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
    }).then(data => setData(data));
  });

  
  // const verify = (id) => {
  //   console.log(id);
  //   //return <Redirect  to="/display/${id}" />
  //   // <Router>
  //   //   <Route path="/display/${id}" component={Display}/>
  //   // </Router>
  // }; 

  return <Wrapper>
    <h1>View Data</h1>
    <table style={
      { border: '1px solid black',
      borderSpacing: '2px'
      }}>
      <tr style={{background: '#D0D0D0', border: '1px solid black'}}>      
         <th style={{border: '1px solid black'}}>Candidate Name </th>
        <th style={{border: '1px solid black'}}>Course</th>
        <th style={{border: '1px solid black'}}>Date of issue</th>
        <th style={{border: '1px solid black'}}>Certificate ID</th>       
      </tr>
      {data.map( d => 
          <tr style={{border: '1px solid black'}}>
            <td style={{border: '1px solid black'}}>{d.firstname} {d.lastname}</td>
            <td style={{border: '1px solid black'}}>{d.coursename}</td>
            <td style={{border: '1px solid black'}}>{d.assignedOn}</td>
            <td style={{border: '1px solid black'}}>{d._id}</td>
            {/* <td ><button style={{
                            width: "100px",
                            marginRight: "15px",
                            marginLeft:"6px"
                          }} onClick={() => {
                            verify(d._id);
                          }}>Verify</button></td> */}
          </tr>       
        )}
       </table>
  </Wrapper>  
    

}

export default View;