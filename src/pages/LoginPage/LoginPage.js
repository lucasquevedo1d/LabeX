import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { ButtonForm, FormLogin, PlaceTitle } from './Styled'
import Button from "@material-ui/core/Button"
import useForm from '../../Hooks/UseForm'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { goToTripList } from '../../Routes/Coordinator'
import { CircularProgress } from '@material-ui/core'

const LoginPage = ({setRigthButtonText}) => {
  const [form, onChange, clear] = useForm({ email: '', password: '' })
  const [isLoading, setIsloading] = useState(false)
 const navigate = useNavigate()

  const onSubmitForm = (event) =>{
    setIsloading(true)
    event.preventDefault()
    const body = {
      email:form.email,
      password:form.password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/login", body)
    .then((res) =>{
      window.localStorage.setItem("token", res.data.token )
      goToTripList(navigate)
      clear()
      setRigthButtonText('Logout')
      setIsloading(false)
    })
    .catch((err) =>{
      alert(err.response.data.message)
      setIsloading(false)
    })
    
  }
  return (
    <div>
      <PlaceTitle>
        <h3>Login</h3>
      </PlaceTitle>
      <FormLogin onSubmit={onSubmitForm}>
      <TextField
            label="Email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            fullWidth
            margin='normal'
            type={"email"}
            required
          />
          <TextField
            label="Senha"
            name={"password"}
            value={form.password}
            onChange={onChange}
            fullWidth
            margin='normal'
            type={"password"}
            required
          />

        <Button
          type={'submit'}
          variant={'contained'}
          color="primary"
          fullWidth
          margin='normal'>
            {isLoading ? <CircularProgress color={'inherit'} size={'24px'}></CircularProgress> : <ButtonForm>Entrar</ButtonForm>}
            
        </Button>
      </FormLogin>
    </div>
  )
}

export default LoginPage