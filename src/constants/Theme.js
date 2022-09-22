import { createTheme } from "@material-ui/core/styles";
import { primaryColor } from "./Colors";
const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText:"white"
      },
      text:{
        //   primary: secondColor
      }
      
    }
  });
  export default theme
  
  