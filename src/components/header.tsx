import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: theme.palette.common.white,
    },
    linkRoot:{
      '& > * + * ': {
        marginLeft: theme.spacing(5),
      },
    },
    link: {
      color: theme.palette.common.white,
    },
    nomalMenu:{
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.up('md')]: {
        display: 'true',
      },
    },
    dropDownMenu: {
      [theme.breakpoints.down('sm')]: {
        display: 'true',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none'
      },
    }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ 
    target: window ? window() : undefined ,
    threshold: 100,
  });

  return (
    <Slide appear={true} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(null);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (item: string) => {
      window.location.href = '#' + item;
    };

    return (
      <>
      <HideOnScroll>
        <AppBar position="sticky" id="back-to-top-anchor">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              ANFANG
            </Typography>
            <div className={classes.nomalMenu}>
              <Typography variant="h6" className={classes.linkRoot}>
                <Link onClick={e => handleClose('art')} className={classes.link}>art work</Link>
                <Link onClick={e => handleClose('skill')} className={classes.link}>engineer skill</Link>
                <Link onClick={e => handleClose('about')} className={classes.link}>about me</Link>
              </Typography>
            </div>
            <div className={classes.dropDownMenu}>
              <IconButton 
                onClick={handleClick}
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={e => handleClose('about')}>about me</MenuItem>
                  <MenuItem onClick={e => handleClose('art')}>art work</MenuItem>
                  <MenuItem onClick={e => handleClose('skill')}>engineer skill</MenuItem>
                </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export default Header;