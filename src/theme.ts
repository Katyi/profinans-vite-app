import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#b9babf', // for gray text
      main: '#1b212f', // for dark text
      dark: '#171d1c', // for SideBar main bg ПРИМЕНЕН
      contrastText: '#fff', // for SideBar text
    },
    secondary: {
      light: '#fafbfb', // for light gray bg
      main: '#eff1f2', // for gray bg ПРИМЕНЕН
      dark: '#293047', // for SideBar list bg and SideBar Btn ПРИМЕНЕН
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
  components: {},
});
