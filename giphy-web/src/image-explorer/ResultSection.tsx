import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from './Image';

function ResultSection() {
  // TODO: When you get to the data access, iterate over the result from the endpoint
  return (
    <Container> 
      <Grid justify="center" container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Image />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Image />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Image />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResultSection;
