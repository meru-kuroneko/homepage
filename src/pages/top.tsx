import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "@fontsource/amatic-sc"

// @ts-ignore
const useStyles = makeStyles(() => ({
  container: {
    margin: '-60px 0px',
    padding: '0px',
    height: height => height,
    backgroundImage: 'url(topimage.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: '50%',
  },
  grid: {
    height: '100%',
  },
  title: {
    fontFamily: ["Amatic SC", "Caveat"],
  }
}));

type Props = {
  id: string,
}

const Top: React.FC<Props> = ({id}) => {
  const height = window.innerHeight;
  const classes = useStyles(height);
  return (
    // @ts-ignore
    <Container fullwidth className={classes.container} id={id}>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h2" className={classes.title}>
          Anfang
        </Typography>
      </Grid>
    </Container>
  );
}
export default Top;