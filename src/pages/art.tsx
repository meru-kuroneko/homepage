import React, {useState, useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ContentsContiner from "../components/contentContiner";
import Backdrop from '@material-ui/core/Backdrop';
import {useWindowDimensions} from '../util/windowDimensions'
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '90%',
      animation: '$fadeIn 1 2s linear'
    },
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      width: '70%',
      animation: '$fadeIn 1 2s linear'
    },
  },
  layoutHeight: {
    height: '75%',
    width: 'auto',
    animation: '$fadeIn 1 2s linear'
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
  // ギャラリーのcolumn数を判定するためのもの
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));
  const col = sizeSm ? 4 : 2

  // イラストのopen, close管理
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

  // openするイラストの縦長/横長判定を行ってstyleを切り替える処理
  const { width, height } = useWindowDimensions();
  const classes = useStyles(height);
  useEffect(() => {
    if (openImageUrl.width > openImageUrl.height) {
      setImageClass(classes.layoutWidth)
    } else {
      setImageClass(classes.layoutHeight)
    }
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

