import React from 'react';

const statusIndicator = (props) => {
 return (
    <span className={props.classes.statusIndicator}>
    <span className={props.classes.statusIndicatorText1} >{props.text1}</span>
    <span className={props.classText2}>{props.text2}</span>
  </span>
  )
 
  };
export default statusIndicator;