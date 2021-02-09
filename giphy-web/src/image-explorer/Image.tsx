import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// For now, we only care about the URL
export type ImageProps = {
  url: string
}

function Image({ url }: ImageProps) {
  return (
    <Grid item xs={12}>
      <Typography>This is a test with url { url }</Typography>
    </Grid>
  );
}

export default Image;
