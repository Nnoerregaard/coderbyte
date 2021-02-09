import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from './Image';
import axios from 'axios'

function ResultSection() {
  useEffect(() => {
    // TODO: Move out into configuration, and lift state when we get to the query section
    axios.get('https://api.giphy.com/v1/stickers/search', { params: { q: "cat", limit: 10, rating: "g", api_key: "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq" }} ).then(result => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  })
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
