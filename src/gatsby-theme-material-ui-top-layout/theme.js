import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Helvetica Neue',
        'Arial',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'Meiryo',
        'sans-serif'
      ].join(','),
  },
  palette: {
    primary: {
      main: "#92A4B0"
    },
    secondary: {
      main: "#E9B6A9"
    },
  },
  overrides: {
    MuiGridListTile: {
      tile: {
        borderRadius: '10px',
      }
    }
  },
  });

export default theme;