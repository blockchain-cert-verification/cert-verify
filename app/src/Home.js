
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  `;
export const Home = (props) => (
  <Wrapper>
     
    <div>
       <h1>Block Verifier</h1>
          <div class="panel__block"></div>
            <p>
              A Blockchain based Certificate verification with Distributed storage. <br/>
              The certificates will be immutable, confidential and tamperproof.<br/>
              <br/><br/>
              By combining 
              <br/><br/>
              BLOCKCHAIN + IPFS + ENCRYPTION = BLOCK VERIFIER
              <br/><br/>
              Combining the multiple technologies and elimination ones draw back with other
              <br/><br/>
              BLOCKCHAIN - Tamperproof<br/><br/>
              IPFS       - Distributed Storage<br/><br/>
              ENCRYPTION - confidentiality<br/><br/>
            </p>
          
    </div>   
  </Wrapper>
)