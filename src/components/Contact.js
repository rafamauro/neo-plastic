import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  input: {
    color: "white",
  },
}));

var bg=require('../images/5.-Geomembranas-HDPE-Polytex-1.jpg')
export default function Contact(){
  const classes = useStyles();

  return(
    <div style={{backgroundImage: "url("+bg+")", paddingTop:50}}>
      <Container maxWidth="md" style={{padding:40}}>
        <Typography component="div" style={{ backgroundColor: '#2E3B55', height: '80vh', opacity: '0.95'}}>
          <form className={classes.root} noValidate autoComplete="off" style={{padding:50}}>
            <TextField
              id="standard-full-width"
              label="Nombre"
              style={{ margin: 8, color:'#FEFDFD'}}
              placeholder="Nombre"
              fullWidth
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
                className: classes.input,
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              id="standard-full-width"
              label="Telefono"
              style={{ margin: 8, color:'#FEFDFD'}}
              placeholder="Telefono"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                className: classes.input,
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              id="standard-full-width"
              label="Correo"
              style={{ margin: 8, color:'#FEFDFD'}}
              placeholder="Correo"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                className: classes.input,
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              id="standard-full-width"
              label="Asunto"
              style={{ margin: 8, color:'#FEFDFD'}}
              placeholder="Asunto"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                className: classes.input,
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              id="standard-full-width"
              label="Mensaje"
              style={{ margin: 8, color:'#FEFDFD'}}
              placeholder="Mensaje"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline="true"
              rows="3"
              InputLabelProps={{
                shrink: true,
                className: classes.input,
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <Button variant="contained" fullWidth>
              Enviar
            </Button>
                       
          </form>
        </Typography>
      </Container>
    </div>
  );
}

