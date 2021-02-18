
import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Header from '../components/header';
import Footer from '../components/footer';
import Top from './top'
import About from './about';
import Art from './art';
import Skill from './skill';

const useStyles = makeStyles((theme) => ({
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

const App = ({data}) => {
  const classes = useStyles();
  return (
      <>
        <Header/>
        <Top id="top" />
        <About id="about"/>
        <Art data={data} />
        <Skill id ="skill" />
        <Footer/>
        <ScrollTop classes={classes} >
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </>
  )}

export const query = graphql`
query {
  allMicrocmsArt {
    nodes {
      id
      title
      createdAt
      picture {
        url
      }
      thumbnail {
        url
      }
    }
  }
}
`

export default App;