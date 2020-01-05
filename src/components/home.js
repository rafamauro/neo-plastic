import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
//import Container from '@material-ui/core/Container';
import WspBtnFloat from './WspBtnFloat';
//import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pricipalbar: {
    background : '#2E3B55',
  },
}));

export default function Home() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem button key="/" >
            <ListItemIcon>
              {<InboxIcon />}
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>      
        <Link to="/products">
          <ListItem button key="products" >
            <ListItemIcon>
              {<InboxIcon />}
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button key="about" >
            <ListItemIcon>
              {<InboxIcon />}
            </ListItemIcon>
            <ListItemText primary="Nosotros" />
          </ListItem>
        </Link>   
        <Link to="/contact">
          <ListItem button key="contact" >
            <ListItemIcon>
              {<InboxIcon />}
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItem>
        </Link>
      </List>
    </div>
  );


  return ( 
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button> */}
      <AppBar position="fixed" className={classes.pricipalbar}>
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NeoPLastic
          </Typography>
          {/* <Typography variant="inherit">
            <WhatsAppIcon color="action" fontSize="small"/>
            +56966686531 - RAFA.MAURO@HOTMAIL.CL
          </Typography> */}
        </Toolbar>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <WspBtnFloat></WspBtnFloat>
    </div>
  );
}