import React from 'react';
import Grid from '@material-ui/core/Grid';

// For now, we only care about the URL
export type ImageProps = {
  url: string
}

function Image({ url }: ImageProps) {
  console.log(url)
  return (
    <Grid item xs={12}>
      <img src={url} alt="Probably a cat or something" />
    </Grid>
  );
}

export default Image;
