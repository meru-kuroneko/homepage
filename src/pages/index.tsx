
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../components/header';
import Top from './top'
import About from './about';
import Art from './art';
import Skill from './skill';

const useStyles = makeStyles((theme) => ({
  loadingScreen:{
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: theme.zIndex.drawer + 1,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    color: '#fff',
    animation: '$fadeOut 1 3s linear',
    animationFillMode: 'forwards',
  },
  '@keyframes fadeOut': {
    '0%': {
      opacity: 1
    },
    '80%': {
      opacity: 1
    },
    '99.9%': {
      height: '100%'
    },
    '100%': {
      opacity: 0,
      height: '0%',
    }
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

function ScrollTop(props) {
  const { children, window, classes } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleFabClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#top');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleFabClick} role="presentation" className={classes.fab}>
        {children}
      </div>
    </Zoom>
  );
}

const App = () => {
  const classes = useStyles();

  return (
      <>
        <div id='loadingScreen' className={classes.loadingScreen}>
          <CircularProgress color="inherit" /><br/>
          Now Loading...
        </div>
        <Header/>
        <Top id="top" />
        <About id="about"/>
        <Art />
        <Skill id ="skill" />
        <ScrollTop classes={classes} >
          <Fab color="primary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </>
  )}

export default App;
