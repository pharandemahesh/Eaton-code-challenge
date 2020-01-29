// import React from 'react';

// const Home = () => (
//   <div id="HOME">
//     <h1>Welcome to the App!</h1>
//   </div>
// );
// export default Home;

import React from 'react';
import { withStyles } from '@material-ui/core/styles';


import Typography from '@material-ui/core/Typography';

import Statustable from '../commonComponents/statusTable';


// Additional styling elements
import styles from '../styles/styleClasses';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;
    let jsonData = {"owner":"pxblue","npmPackages":{"header":["Repository","NPM","Status","Issues"],"body":[{"title":{"name":"colors","titleUrl":"https://github.com/pxblue/colors/tree/master"},"npm":[{"repoName":"@pxblue/color","repoLink":"https://www.npmjs.com/package/@pxblue/colors","repoVersion":"v2.0.0"},{"repoName":"@pxblue/colors-branding","repoLink":"https://www.npmjs.com/package/@pxblue/colors-branding","repoVersion":"v3.0.0"}],"buildStatus":"passing","bugs":0},{"title":{"name":"component-library","titleUrl":"https://github.com/pxblue/component-library/tree/master"},"npm":[{"repoName":"@pxblue/angular-components","repoLink":"https://www.npmjs.com/package/@pxblue/angular-components","repoVersion":"v1.2.1"},{"repoName":"@pxblue/react-components","repoLink":"https://www.npmjs.com/package/@pxblue/react-components","repoVersion":"v1.1.1"},{"repoName":"@pxblue/react-native-components","repoLink":"https://www.npmjs.com/package/@pxblue/react-native-components","repoVersion":"v2.0.2"}],"buildStatus":"passing","bugs":1},{"title":{"name":"chartjs","titleUrl":"https://github.com/pxblue/chartjs/tree/master"},"npm":[{"repoName":"@pxblue/chartjs","repoLink":"https://www.npmjs.com/package/@pxblue/chartjs","repoVersion":"v1.0.0"}],"buildStatus":"passing","bugs":0},{"title":{"name":"highcharts","titleUrl":"https://github.com/pxblue/highcharts/tree/master"},"npm":[{"repoName":"@pxblue/highcharts","repoLink":"https://www.npmjs.com/package/@pxblue/highcharts","repoVersion":"v2.0.0"}],"buildStatus":"passing","bugs":0},{"title":{"name":"icons","titleUrl":"https://github.com/pxblue/icons/tree/master"},"npm":[{"repoName":"@pxblue/icons","repoLink":"https://www.npmjs.com/package/@pxblue/icons","repoVersion":"v1.0.25"},{"repoName":"@pxblue/icons-svg","repoLink":"https://www.npmjs.com/package/@pxblue/icons-svg","repoVersion":"v1.0.18"},{"repoName":"@pxblue/ng-progress-icons","repoLink":"https://www.npmjs.com/package/@pxblue/ng-progress-icons","repoVersion":"v1.1.4"},{"repoName":"@pxblue/react-progress-icons","repoLink":"https://www.npmjs.com/package/@pxblue/react-progress-icons","repoVersion":"v1.0.7"},{"repoName":"@pxblue/symbols","repoLink":"https://www.npmjs.com/package/@pxblue/symbols","repoVersion":"v1.0.6"}],"buildStatus":"passing","bugs":4},{"title":{"name":"icons-mui","titleUrl":"https://github.com/pxblue/icons-mui/tree/master"},"npm":[{"repoName":"@pxblue/icons-mui","repoLink":"https://www.npmjs.com/package/@pxblue/icons-mui","repoVersion":"v2.0.2"}],"buildStatus":"passing","bugs":0},{"title":{"name":"mapbox","titleUrl":"https://github.com/pxblue/mapbox/tree/master"},"npm":[{"repoName":"@pxblue/mapbox","repoLink":"https://www.npmjs.com/package/@pxblue/mapbox","repoVersion":"v1.0.1"}],"buildStatus":"passing","bugs":0},{"title":{"name":"symbols-mui","titleUrl":"https://github.com/pxblue/symbols-mui/tree/master"},"npm":[{"repoName":"@pxblue/symbols-mui","repoLink":"https://www.npmjs.com/package/@pxblue/symbols-mui","repoVersion":"v1.0.4"}],"buildStatus":"passing","bugs":0},{"title":{"name":"themes","titleUrl":"https://github.com/pxblue/themes/tree/master"},"npm":[{"repoName":"@pxblue/themes","repoLink":"https://www.npmjs.com/package/@pxblue/themes","repoVersion":"v3.0.1"}],"buildStatus":"passing","bugs":1}]}}
    return(
      <div className={classes.containerBody}>
        <Typography variant="h4" className={classes.title}>
        Power Xpert Blue Resources
        </Typography>
        <Typography variant="body1" className={classes.bodyPara}>
          Power Xpert Blue offers a number of resources for developers, available through NPM and Github. These include utility packages as well as sample code/design pattern examples.
        </Typography>
        <Typography variant="h6" className={classes.title}>
          NPM Packages
        </Typography>
        <Typography variant="body1" className={classes.bodyPara}>The following table shows the current status for PX Blue resources available through NPM.</Typography>
        <Statustable
          classes={classes}
          data={jsonData.npmPackages}
        />
        
        <Typography variant="h6" className={classes.title}>
        Design Patterns / Examples
        </Typography>
        <Typography variant="body1" className={classes.bodyPara}>The following table shows the current status of the PX Blue design pattern code samples available from GitHub. There are also links to running examples with live-editing capability.</Typography>
        
        
        
        
        
        
        
        
      </div>
    )
  }
}

export default withStyles(styles)(Home);