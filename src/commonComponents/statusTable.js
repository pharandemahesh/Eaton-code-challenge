import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import StatusIndicator from '../commonComponents/statusIndicator';


const StatusTable = (props) => {
  let tableHeader = getTableHeader(props.data.header);
  let tableBody = getTableBody(props)
  return (
    <Table style={{marginBottom:"55px"}}>
      <TableHead>
        {tableHeader}
      </TableHead>
      {tableBody}
    </Table>
  )
};


function getTableBody(props){
  let tableBody = [];
  props.data.body.forEach((item,index)=>{
    tableBody.push(<TableRow key={index} className='someNmae'>
      <TableCell component="th" scope="row">
        <a href={item.title.titleUrl}>{item.title.name}</a>
      </TableCell>
      <TableCell align="right">
        {getStatusIndicatorArray(item.npm,props)}
      </TableCell>
      <TableCell align="right">
        {getBuildStatus(item,props)}
      </TableCell>
      <TableCell align="right">
        {getBugReport(item,props)}
      </TableCell>
    </TableRow>)
  })
  return(
    <TableBody>
      {tableBody}
    </TableBody>
  )
};

function getBugReport(item,props){
  let classText2 = item.bugs === 0 ? props.classes.statusIndicatorText2Green : props.classes.statusIndicatorText2Orange;
  return(<StatusIndicator 
    text1={'bugs'}
    text2={item.bugs+" open"}
    classes={props.classes}
    classText2={classText2}
  />)  
}

function getBuildStatus(item,props){
  let classText2 = props.classes.statusIndicatorText2Green;
  if(item.buildStatus!=="passing"){
    classText2 = props.classes.statusIndicatorText2Oranges;
  }
 return(<StatusIndicator 
  text1={"build"}
  text2={item.buildStatus}
  classes={props.classes}
  classText2={classText2}
      />) 
}


function getStatusIndicatorArray(npmArray,props){
  let statusIndicatorArray = [];
   npmArray.forEach((item,index)=>{
    statusIndicatorArray.push(
      <a href={item.repoLink} key={index}>
        <StatusIndicator 
          text1={item.repoName}
          text2={item.repoVersion}
          classes={props.classes}
          classText2={props.classes.statusIndicatorText2Blue}
        />
      </a>
    )
   })
  return (<React.Fragment>{statusIndicatorArray}</React.Fragment>)
}

function getTableHeader(headerData){
  let tableHeader = [];
  headerData.forEach((item,index) => {
    tableHeader.push(
      <TableCell key={index}>{item}</TableCell>
    )
  })
  return (
    <TableRow>
      {tableHeader}
    </TableRow>
  )
}
export default StatusTable;