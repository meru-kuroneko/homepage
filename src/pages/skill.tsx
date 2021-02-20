import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentsContiner from "../components/contentContiner";

const useStyles = makeStyles((theme) => ({
  dl: {
    '& dt': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  infoMessage: {
    '& a': {
      color: theme.palette.primary.main,
    }
  }
}));

type Props = {
  id: string,
}

const Skill: React.FC<Props> = ({id}) => {
  const classes = useStyles();
  return (
    <ContentsContiner id={id}>
      <Typography variant="h3" gutterBottom>
        engineer skill.
      </Typography>
      <Grid 
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <dl className={classes.dl}>
            <dt>開発経験</dt>
            <dd>webアプリケーション</dd>
            <dd>Androidネイティブアプリ（Kotlin）</dd>
            <dt>言語</dt>
            <dd>
              <dl>
                <dt>バックエンド</dt>
                <dd>Java, Ruby, Kotlin</dd>
              </dl>
            </dd>
            <dd>
              <dl>
                <dt>フロントエンド</dt>
                <dd>JavaScript, React, TypeScript</dd>
              </dl>
            </dd>
          </dl>
          <Typography variant='body1' className={classes.infoMessage}>
            このサイトはリポジトリを公開しています。<br/>
            どんなスキルセットで実装されてるか気になる方は覗いてみてください。<br/>
            <a href='https://github.com/meru-kuroneko/homepage'>
              https://github.com/meru-kuroneko/homepage
            </a><br/>
            個人/スタートアップのwebサイト制作のお仕事も随時募集しているのでご相談ください。
          </Typography>
        </Grid>
      </Grid>
    </ContentsContiner>
  );
}
export default Skill;
