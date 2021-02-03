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
    width: 600,
    height: 350,
  },
}));

// TODO: 仮データ
const tileData = [
  {img: 'icon.jpeg', cols: 1}, {img: 'icon.jpeg', cols: 1}, {img: 'icon.jpeg', cols: 1},
  {img: 'icon.jpeg', cols: 1}, {img: 'icon.jpeg', cols: 1}, {img: 'icon.jpeg', cols: 1} ];

type Props = {
  id: string
}

const Art: React.FC<Props> = ({id}) => {
  const classes = useStyles();
  return (
    <ContentsContiner id={id}>
      <Typography variant="h3" gutterBottom>
        art work.
      </Typography>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
        <GridListTile key={tile.img} cols={tile.cols || 1}>
          <img src={tile.img} alt={tile.img} />
        </GridListTile>
  ))}
</GridList>
    </ContentsContiner>
  );
}
export default Art;
