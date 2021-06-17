
import { colors } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 5em;
  margin-left: 5em;
  margin-right: 1em;
  `;
export const Home = (props) => (
  <Wrapper>
     <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL+'/assests/bg.jpg'})`,
      height: "700px", backgroundRepeat: "no-repeat",backgroundSize:"cover"
    }}>
       <h1>Block Verifier</h1>
          <div class="panel__block"></div>
          
          <centre>
            <h2>
             
              A Blockchain based Certificate verification with Distributed storage. <br/><br/>
              The certificates will be immutable, confidential and tamperproof.<br/>
              <br/><br/>
              By combining 
              <br/><br/>
              BLOCKCHAIN + MongoDB + ENCRYPTION = BLOCK VERIFIER
              <br/><br/>
              Combining the multiple technologies and elimination ones draw back with other
              <br/><br/>
              BLOCKCHAIN - Tamperproof<br/><br/>
              MongoDB       - Distributed Storage<br/><br/>
              ENCRYPTION - confidentiality<br/><br/>
      
            </h2>
            </centre>

          
    </div>   
  </Wrapper>
)
