import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
    floatbtn: {
    //margin: theme.spacing(1),
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 30,
    left: 'auto',
    zIndex: 1,
    position: 'fixed',
    backgroundColor: "#008000",
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default function WspBtnFloat(){
    const classes = useStyles();

    return(
        <div>
          <Fab size="large" aria-label="WhatsAppIcon" className={classes.floatbtn} href="https://wa.me/56966686531">
            <WhatsAppIcon color="action" fontSize="large"/>
          </Fab>
        </div>
    );
}