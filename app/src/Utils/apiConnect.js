const getHeader = {
    headers: {
      Accept: "application/json"
    }
  };
  
  const postHeader = {
    method: "POST",
    headers: {
      ...getHeader,
      "Content-Type": "application/json"
    }
  };
  
  let host = "";
  
  if (process.env.NODE_ENV !== "production") host = "http://localhost:3000";
  
  export const getCertificate = certificateId =>
    fetch(`${host}/cert/data/${certificateId}`, getHeader)
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
  
  export const verifyCertificate = certificateId =>
    fetch(`${host}/display/${certificateId}`, getHeader)
      .then(res => {
        if (res.status === 200) return true;
        else if (res.status === 401) return false;
      })
      .catch(err => {
        console.log(err);
      });
  
  export const generateCertificate = (
    candidateName,
    courseName,
    orgName,
    assignDate,
    duration,
    emailId
  ) =>
    fetch(`${host}/create`, {
      ...postHeader,
      body: JSON.stringify({
        candidateName,
        courseName,
        orgName,
        assignDate,
        duration,
        emailId
      })
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });