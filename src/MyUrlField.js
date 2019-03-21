import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
}

const MyUrlField = ({ record = {}, source }) => {
  // use http:// so current window path is not prefixed in link, see https://stackoverflow.com/questions/38573892/i-try-to-make-my-material-ui-raisedbutton-link-to-an-external-url-without-succes
  return(
    <a href={`http://${record[source]}`} >
      {record[source]}
      <LaunchIcon className={styles.icon} />
    </a>
  )
}

export default withStyles(styles)(MyUrlField);
