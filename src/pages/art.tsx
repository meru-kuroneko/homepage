import React, {useState, useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ContentsContiner from "../components/contentContiner";
import Backdrop from '@material-ui/core/Backdrop';
import {useWindowDimensions} from '../util/windowDimensions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridList: {
    width: '90%',
    height: height => parseInt(height, 10) * 0.6,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  thumbnail: {
    filter: 'blur(1px) saturate(30%)',
  },
  layoutWidth: {
    height: 'auto',
    width: '70%',
    animation: '$fadeIn 1 2s linear'
  },
  spLayoutWidth: {
    height: 'auto',
    width: '90%',
    animation: '$fadeIn 1 2s linear'
  },
  layoutHeight: {
    height: '75%',
    width: 'auto',
    animation: '$fadeIn 1 1s linear'
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
}));

type Picture = {
  url: string,
  height: string,
  width: string,
}

const Art = () => {
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
              height
              width
            }
            thumbnail {
              url
            }
          }
        }
      }
    ` 
  )
  const [open, setOpen] = useState(false);
  const [openImageUrl, setOpenImageUrl] = useState('');
  const [imageClass, setImageClass] = useState('layoutWidth')
  const handleClose = () => {
    setOpen(false);
    setOpenImageUrl('');
    setImageClass('')
  };
  const handleToggle = (imgUrl: Picture) => {
    setOpenImageUrl(imgUrl);
    setOpen(!open);
  };
  const { width, height } = useWindowDimensions();
  const classes = useStyles(height);
  const col = width > 500 ? 4 : 2

  useEffect(() => {
    if (openImageUrl.width > openImageUrl.height) {
      if(width < 500) {
        setImageClass(classes.spLayoutWidth)
        return 
      }
      setImageClass(classes.layoutWidth)
      return
    }
    setImageClass(classes.layoutHeight)
  }, [openImageUrl]);

  return (
    <ContentsContiner id='art'>
      <Typography variant="h3" gutterBottom>
        art work.
      </Typography>
      <GridList cellHeight={160} className={classes.gridList} cols={col}>
        {data.allMicrocmsArt.nodes.map( node =>
        <GridListTile key={node.id} cols={1}>
            <img 
              src={node.thumbnail.url} 
              alt={node.title} 
              className={classes.thumbnail}
              onClick={() => handleToggle(node.picture)} />
          </GridListTile>
        )}
      </GridList>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <img src={openImageUrl.url} alt='art work' className={imageClass} />
      </Backdrop>
    </ContentsContiner>
  );
}

export default Art;

