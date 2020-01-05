import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import CardMembrane from './CardMembrane';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function DashContent() {
  //const [spacing] = React.useState(2);
  const classes = useStyles();
  var bg=require('../images/5.-Geomembranas-HDPE-Polytex-1.jpg')
  return (
    <div style={{backgroundImage: "url("+bg+")", paddingTop:50}}>
      <Grid style={{ paddingTop:40, paddingBottom:250 }} container className={classes.root} direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={10} sm={5} lg={3} style={{paddingTop:20}}>
          <Grid container spacing={1}>
            <CardMembrane></CardMembrane>
          
          </Grid>
        </Grid>
        <Grid item xs={10} sm={5} lg={3} style={{paddingTop:20}}> 
          <Grid container spacing={1}>
            <CardMembrane></CardMembrane>
          
          </Grid>
        </Grid>
        <Grid item xs={10} sm={5} lg={3} style={{paddingTop:20}}> 
          <Grid container spacing={1}>
            <CardMembrane></CardMembrane>
          
          </Grid>
        </Grid>       
      </Grid>
    </div>
  );
}