import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "@fontsource/amatic-sc"

// @ts-ignore
const useStyles = makeStyles(() => ({
  container: {
    padding: '0px',
    opacity: '50%',
  },
  title: {
    fontFamily: ["Amatic SC", "Caveat"],
  }
}));

type Props = {
  id: string,
}

const Top: React.FC<Props> = ({id}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} id={id}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            Anfang
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            イラストレーター めるろって のポートフォリをサイト<br/>
            ごゆっくりどうぞ
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Top;