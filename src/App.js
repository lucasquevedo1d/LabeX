import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/Theme";
import { Router } from "./Routes/Router";
import { AppContainer } from "./Routes/Styled";
import {BrowserRouter} from "react-router-dom"
import { Headers } from "./components/Headers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import { useState } from "react";


function App() {
  const token = window.localStorage.getItem('token')
  const [rigthButtontext, setRigthButtonText] = useState(token ? 'Logout' : 'Login')

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Headers rigthButtontext={rigthButtontext} setRigthButtonText={setRigthButtonText}/>
      <AppContainer>
      <Router rigthButtontext={rigthButtontext} setRigthButtonText={setRigthButtonText}/>
      </AppContainer>
      </BrowserRouter>
      
    </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App
