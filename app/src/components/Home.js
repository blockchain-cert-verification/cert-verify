
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 7em;
  margin-right: 6em;
  `;
export const Home = (props) => (
  <Wrapper>
    <div>
       <h1>Block Verifier</h1>
          <div class="panel__block"></div>
          <centre>
            <p style={{backgroundColor: "lightblue"}}>
              A Blockchain based Certificate verification with Distributed storage. <br/>
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
            </p>
            </centre>

          
    </div>   
  </Wrapper>
)
