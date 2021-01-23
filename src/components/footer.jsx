import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

export default function Footer() {
    const classes = useStyles();
  return (
    <>
      <Container fixed>
        <Typography className={classes.root}>
          @meru_lotte
        </Typography>
      </Container>
    </>
  );
}