import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentsContiner from "../components/contentContiner";

const useStyles = makeStyles((theme) => ({
  // 使用していない設定はしたい
  icon: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function items(title, content) {

}

type Props = {
  id: string,
}

const Skill: React.FC<Props> = ({id}) => {
  const classes = useStyles();
  return (
    <ContentsContiner id={id}>
      <Typography variant="h3" gutterBottom>
        engineer skills.
      </Typography>
      <Grid
        item
        direction="column"
        justify="flex-start"
        alignItems="flex-start" >
        <Grid item>
          <Typography variant="subtitle1" color="textPrimary">
            開発
          </Typography>
          <Typography variant="body1">
            webアプリケーション, Androidネイティブアプリ（Kotlin）
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" color="textPrimary">
            言語
          </Typography>
          <Typography variant="body1">
            バックエンド：Java, Ruby, Kotlin
          </Typography>
          <Typography variant="body1">
            フロントエンド：JavaScript, TypeScript, React
          </Typography>
        </Grid>
        <Grid item>
          その他：Docker
        </Grid>
      </Grid>
    </ContentsContiner>
  );
}
export default Skill;
