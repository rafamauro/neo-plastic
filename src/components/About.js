import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

var bg=require('../images/5.-Geomembranas-HDPE-Polytex-1.jpg')
const About = () =>(
  <div style={{backgroundImage: "url("+bg+")"}}>
    <Container maxWidth="md">
      <Typography component="div" style={{ backgroundColor: '#2E3B55', height: '90vh', opacity: '0.80'}}>
        <h4 style={{color: '#FEFDFD'}}>Neoplastic es una empresa dedicada a comercializar e instalar una amplia gama de productos Geosintéticos con los más altos estándares de calidad y certificación del mercado, garantizando a nuestros clientes el mejor servicio, precio y suministro confiable, permitiendo desarrollar los trabajos con eficiencia. La aplicación de estos materiales permite mejorar las condiciones de terreno, aumentando la capacidad de carga o reemplazando propiedades del mismo, buscando el perfeccionamiento en los procesos de construcción. </h4>
      </Typography>
    </Container>
  </div>
);

export default About;