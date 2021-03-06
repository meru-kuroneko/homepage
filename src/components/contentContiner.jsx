import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
    [theme.breakpoints.down('sm')]: {
      height: windowHeight => windowHeight * 1.3,
    },
    [theme.breakpoints.up('md')]: {
      height: windowHeight => windowHeight,
    },
  },
  grid: {
    height: '100%',
  },
}));

export default function ContentsContiner(props) {
  var windowHeight = 100
  if ( typeof window !== 'undefined' ) {
    windowHeight = window.innerHeight;
  }
  const classes = useStyles(windowHeight);
  return (
    <Container fixed className={classes.container} id={props.id}>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
      {props.children}
      </Grid>
    </Container>
  );
}