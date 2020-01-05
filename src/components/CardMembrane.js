import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardMembrane() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea focusHighlight>
        <CardMedia
          className={classes.media}
          image='https://http2.mlstatic.com/geomembrana-hdpe-tuberia-fitting-y-arriendo-de-equipos-tf-D_NQ_NP_955771-MLC25529646381_042017-F.jpg'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            GeoMembranas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mas Info
        </Button>
      </CardActions>
    </Card>
  );
}