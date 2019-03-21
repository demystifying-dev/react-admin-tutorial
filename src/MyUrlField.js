import React from 'react';

const MyUrlField = ({ record = {}, source }) => {
  // use http:// so current window path is not prefixed in link, see https://stackoverflow.com/questions/38573892/i-try-to-make-my-material-ui-raisedbutton-link-to-an-external-url-without-succes
  return(
    <a href={`http://${record[source]}`} >
      {record[source]}
    </a>
  )
}

export default MyUrlField;
