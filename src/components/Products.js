import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
  },
  card2: {
    maxWidth: 250,
    backgroundColor:'#dddddd',
  },
  media: {
    height: 250,
  },
  media2: {
    height: 100,
  },
});

export default function Products(){
  var bg=require('../images/5.-Geomembranas-HDPE-Polytex-1.jpg')
  const classes = useStyles();
  return(
    <div style={{backgroundImage: "url("+bg+")", paddingTop:50}}>
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
                  GeoMembrana
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Compuesta de antioxidantes y termo-estabilizadores, 
                  resistencia al envejecimiento por temperatura y resistencia 
                  a la radiación se comercializan en espesores de 0.75mm , 
                  1.00 mm ,1.5 mm y 2.00 mm. La utilización de Geomembrana 
                  fabricadas con resinas de polietileno, especialmente diseñadas 
                  para condiciones expuestas de aplicación como revestimiento 
                  para impermeabilizar presenta una gran multiplicidad 
                  de aplicaciones siendo normalmente utilizada para el 
                  revestimiento de estructuras de hormigón, Tranques de tierra,
                  canales de conducción, túneles, estanques de contención y/o 
                  regulación, pilas de lixiviación, estanques decantadores, 
                  para la contención de gran diversidad de soluciones agresivas 
                  piscinas industriales estanques de cultivos, cierre de vertederos. 
                </Typography>
                <Card className={classes.card2}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media2}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>  
              </CardContent>
            </CardActionArea>
          </Card>          
          </Grid>
        </Grid>
        <Grid item xs={10} sm={8} lg={8} style={{paddingTop:20}}>
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
                  GeoMembrana
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Compuesta de antioxidantes y termo-estabilizadores, 
                  resistencia al envejecimiento por temperatura y resistencia 
                  a la radiación se comercializan en espesores de 0.75mm , 
                  1.00 mm ,1.5 mm y 2.00 mm. La utilización de Geomembrana 
                  fabricadas con resinas de polietileno, especialmente diseñadas 
                  para condiciones expuestas de aplicación como revestimiento 
                  para impermeabilizar presenta una gran multiplicidad 
                  de aplicaciones siendo normalmente utilizada para el 
                  revestimiento de estructuras de hormigón, Tranques de tierra,
                  canales de conducción, túneles, estanques de contención y/o 
                  regulación, pilas de lixiviación, estanques decantadores, 
                  para la contención de gran diversidad de soluciones agresivas 
                  piscinas industriales estanques de cultivos, cierre de vertederos. 
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

