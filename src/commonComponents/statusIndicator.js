import React from 'react';

const statusIndicator = (props) => {
  const classes = props.classes;
  const classNameForText2 = classes.statusIndicatorText2Green;;
  const text2 = props.text2;
  return (
    <span className={classes.statusIndicator}>
    <span className={classes.statusIndicatorText1} >{props.text1}</span>
    <span className={classNameForText2}>{text2}</span>
  </span>
  )
 
  };
export default statusIndicator;