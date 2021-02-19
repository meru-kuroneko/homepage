import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
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

const Art = () => {
  const classes = useStyles();
  const data = useStaticQuery(
    graphql`
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
  )

  return (
    <ContentsContiner id='art'>
      <Typography variant="h3" gutterBottom>
        art work.
      </Typography>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {data.allMicrocmsArt.nodes.map( node =>
        <GridListTile key={node.id} cols={1}>
            <img src={node.thumbnail.url} alt={node.title} />
          </GridListTile>
        )}
      </GridList>
    </ContentsContiner>
  );
}

export default Art;

