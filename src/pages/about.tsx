import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentsContiner from "../components/contentContiner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  container: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
}));

type Props = {
  id: string,
}

const About: React.FC<Props> = ({id}) => {
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
        </Grid>
        <Grid
          item
          direction="column"
          justify="flex-start"
          alignItems="flex-start" >
          <Grid item>
            name: めるろって
          </Grid>
          <Grid item>
            work: システムエンジニア 絵描き
          </Grid>
          <Grid item>
            hobby: ボードゲーム 謎解き フットサル テニス
          </Grid>
        </Grid>
      </Grid>
    </ContentsContiner>
  );
}
export default About;
