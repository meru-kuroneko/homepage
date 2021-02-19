import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ContentsContiner from "../components/contentContiner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridList: {
    width: '90%',
    height: 350,
  },
}));

const Art = ({data}) => {
  const classes = useStyles();
  return (
    <ContentsContiner id='art'>
      <Typography variant="h3" gutterBottom>
        art work.
      </Typography>

    </ContentsContiner>
  );
}

export default Art;

