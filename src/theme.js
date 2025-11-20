import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#046838',    // তোমার গাঢ় সবুজ
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FA921D',    // তোমার কমলা
      contrastText: '#ffffff',
    },
  },
});

export default theme;