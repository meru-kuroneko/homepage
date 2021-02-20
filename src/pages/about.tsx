import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentsContiner from "../components/contentContiner";
import {Twitter, GitHub, Instagram} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  dl: {
    '& dt': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  snsIcon: {
    height: '5.0em',
    '& .MuiSvgIcon-root': {
      '&:hover': {
        color: theme.palette.secondary.main,
        fontSize: '1.8em',
      },
    },
    '& a': {
      color: theme.palette.primary.main,
    },
  },
  pixivIconLink: {
    textDecoration: 'none',
    background: "#055",  
    '&:hover': {
      textDecoration: 'none',
    }
  },
  pixivIcon: {
    fontSize: '1.8em',
    fontFamily: 'Courier',

    '&:hover': {
      fontSize: '2.0em',
      color: theme.palette.secondary.main,
    }
  },
}));

type Props = {
  id: string,
}

const About: React.FC<Props> = ({ id }) => {
  const classes = useStyles();

  return (
    <ContentsContiner id={id}>
      <Typography variant="h3" gutterBottom>
        about me.
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={5} >
        <Grid item>
          <Avatar src='/icon.jpeg' alt='icon' className={classes.icon} />
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              className={classes.snsIcon}>
              <Grid item>
                <a href='https://twitter.com/meru_lotte' target='_blank' rel="noopener">
                  <Twitter />
                </a>
              </Grid>
              <Grid item>
                <a href='https://www.instagram.com/meru_lotte/' target='_blank' rel="noopener">
                  <Instagram />
                </a>
              </Grid>
              <Grid item>
                <a href='https://github.com/meru-kuroneko' target='_blank' rel="noopener">
                  <GitHub />
                </a>
              </Grid>
              <Grid item>
                <a href='https://www.pixiv.net/users/50430472'
                  className={classes.pixivIconLink}
                  target='_blank' rel="noopener">
                  <div>
                    <Typography className={classes.pixivIcon}>P</Typography>
                  </div>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <dl className={classes.dl}>
            <dt>なまえ</dt>
            <dd>めるろって</dd>
            <dt>しごと</dt>
            <dd>イラスト制作</dd>
            <dd>システムエンジニア</dd>
            <dt>しゅみ</dt>
            <dd>ボードゲーム 謎解き フットサル テニス</dd>
            <dd>最近は万年筆とそのインクに課金しがち</dd>
          </dl>
        </Grid>
      </Grid>
    </ContentsContiner>
  );
}
export default About;
