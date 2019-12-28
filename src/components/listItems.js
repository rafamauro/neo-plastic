import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import CallIcon from '@material-ui/icons/Call';

const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="INICIO" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="PRODUCTOS" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="SOBRE NOSOTROS" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <CallIcon />
      </ListItemIcon>
      <ListItemText primary="CONTACTO" />
    </ListItem>
  </div>
);

export default mainListItems;