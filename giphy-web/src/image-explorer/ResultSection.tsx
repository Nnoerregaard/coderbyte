import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from './Image';

type ResultSectionProp = { 
  urls: string[]
}

function ResultSection({ urls }: ResultSectionProp) {
  // TODO: When you get to the data access, iterate over the result from the endpoint
  return (
    <Container> 
      <Grid justify="center" container spacing={3}>
        {urls.map(url => (<Grid item xs={12} sm={3}>
          <Image  url={url} />
        </Grid>))}
      </Grid>
    </Container>
  );
}

export default ResultSection;
