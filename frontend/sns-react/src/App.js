import './App.css';

//追加
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { indigo } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#f44336',
    },
    typography: {
      fontFamily: 'Comic Neue',
    },
  }
})

function App() {
  return (
    //変更
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;
