import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 250,
  },
});

export default function About() {
  const classes = useStyles();
  var bg=require('../images/5.-Geomembranas-HDPE-Polytex-1.jpg')
  return(
    <div style={{backgroundImage: "url("+bg+")" , paddingTop:50}}>
      <Grid style={{ paddingTop:40, paddingBottom:150 }} container className={classes.root} direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={10} sm={8} lg={8}>
          <Grid container>
          <Card className={classes.card}>
            <CardActionArea focusHighlight>
              <CardMedia
                className={classes.media}
                image='https://http2.mlstatic.com/geomembrana-hdpe-tuberia-fitting-y-arriendo-de-equipos-tf-D_NQ_NP_955771-MLC25529646381_042017-F.jpg'
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nosotros
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Neoplastic es una empresa dedicada a comercializar e instalar
                una amplia gama de productos Geosintéticos con los más altos
                estándares de calidad y certificación del mercado,
                garantizando a nuestros clientes el mejor servicio,
                precio y suministro confiable, permitiendo desarrollar los
                trabajos con eficiencia. La aplicación de estos materiales
                permite mejorar las condiciones de terreno, aumentando 
                la capacidad de carga o reemplazando propiedades del mismo,
                buscando el perfeccionamiento en los procesos de construcción.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          </Grid>
        </Grid>   
      </Grid>
    </div>
  );
}

