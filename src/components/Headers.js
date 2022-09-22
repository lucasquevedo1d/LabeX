import * as React from 'react';
import { Button } from '@material-ui/core';
import { LetterButton, StyledAppBar, StyledToolbar } from './Styled';
import { goToHome } from '../Routes/Coordinator';
import { useNavigate } from "react-router-dom"


export const Headers = ({rigthButtontext, setRigthButtonText}) => {
  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')
 const logout = () => {
    window.localStorage.removeItem('token')
  }

  const rigthButtontextAction = () => {
    if (token) {
      logout()
      setRigthButtonText('Login')
      goToHome(navigate)
    } else {
      goToHome(navigate)
    }
  }

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Button color='inherit'><LetterButton onClick={() => goToHome(navigate)}>LabeX</LetterButton></Button>
        <Button color='inherit' onClick={rigthButtontextAction}><LetterButton>{rigthButtontext}</LetterButton></Button>
      </StyledToolbar>
    </StyledAppBar>

  );
}

