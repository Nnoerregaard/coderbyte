import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from './Image';

type Result = {
  url: string;
  id: string
}

type ResultSectionProp = { 
  results: Result[]
}

function ResultSection({ results }: ResultSectionProp) {
  // TODO: When you get to the data access, iterate over the result from the endpoint
  return (
    <Container> 
      <Grid justify="center" container spacing={3}>
        {results.map(result => (<Grid item xs={12} sm={3}>
          <Image key={result.id} url={result.url} />
        </Grid>))}
      </Grid>
    </Container>
  );
}

export default ResultSection;
