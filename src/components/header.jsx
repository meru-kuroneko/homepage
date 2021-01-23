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

export default function Header() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
  return (
    <>
      <Container fixed>
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault}>
                ABOUT
            </Link>
        </Typography>
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault}>
                WORKS / ART / ENGINEER SKILL
            </Link>
        </Typography>
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault}>
                Contact
            </Link>
        </Typography>
      </Container>
    </>
  );
}