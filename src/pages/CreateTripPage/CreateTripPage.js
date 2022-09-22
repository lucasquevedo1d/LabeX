import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "@material-ui/core/Button"
import { ButtonForm, FormLogin, PlaceTitle } from './Styled'
import axios from 'axios'
import { useFormCreateTrip } from '../../Hooks/UseFormCreateTrip'
import { goToTripList } from '../../Routes/Coordinator'
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { useProtectedPage } from '../../Hooks/UseProtectedPage'


const CreateTripPage = () => {
  useProtectedPage()
  const [isLoading, setIsloading] = useState(false)
  const [date, setDate] = useState(new Date())
  const [form, onChangeInput] = useFormCreateTrip({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })
 

  const navigate = useNavigate()
  
  const onSubmitForm = (event) =>{
    setIsloading(true)
    event.preventDefault()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
   
    const body={
      name:form.name,
      planet:form.planet,
      date:formattedDate,
      description:form.description,
      durationInDays:form.duration
    }
   
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips`, body,{
      headers:{
        auth: window.localStorage.getItem('token')
      }
    })
    .then((res) =>{
      goToTripList(navigate)
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
        <h2>Criar Viagem</h2>
      </PlaceTitle>
      <FormLogin onSubmit={onSubmitForm}>
        <TextField
          label="Nome"
          name={'name'}
          type={'text'}
          fullWidth
          onChange={onChangeInput}
          value={form['name']}
          margin='normal' 
          required
          />
        <FormControl margin='normal' fullWidth id={"select-planetas"} >
        <InputLabel labelId={"select-planetas"}>Planetas</InputLabel>
        <Select label="Planeta"
          name={'planet'}
          type={'text'}
          fullWidth
          onChange={onChangeInput}
          value={form.planet}
          margin='normal' 
          required>
            <MenuItem value={'Mercúrio'}>Mercúrio</MenuItem>
            <MenuItem value={'Vénus'}>Vénus</MenuItem>
            <MenuItem value={'Marte'}>Marte</MenuItem>
            <MenuItem value={'Júpiter'}>Júpiter</MenuItem>
            <MenuItem value={'Saturno'}>Saturno</MenuItem>
            <MenuItem value={'Urano'}>Urano</MenuItem>
            <MenuItem value={'Netuno'}>Netuno</MenuItem>
          </Select>

        </FormControl>

          <KeyboardDatePicker
          disableToolbar
          fullWidth
          value={date.date}
          onChange={date => setDate(date)}
          margin='normal' 
          required
          format="dd/MM/yyyy"
          minDate={new Date()}
          />
           <TextField
          label="Descrição"
          name={'description'}
          type={'text'}
          fullWidth
          onChange={onChangeInput}
          value={form.description}
          margin='normal' 
          required
          />
          <FormControl margin='normal' fullWidth id={"select-planetas"}>
          <InputLabel labelId={"select-durationInDays"}>Duração em dias</InputLabel>
          <Select
          label="Duração em dias"
          name={'duration'}
          type={'text'}
          fullWidth
          onChange={onChangeInput}
          value={form.duration}
          margin='normal' 
          required
          >
            <MenuItem value={'10'}>10</MenuItem>
            <MenuItem value={'20'}>20</MenuItem>
            <MenuItem value={'30'}>30</MenuItem>
            <MenuItem value={'40'}>40</MenuItem>
            <MenuItem value={'50'}>50</MenuItem>
            <MenuItem value={'60'}>60</MenuItem>
            <MenuItem value={'70'}>70</MenuItem>
            <MenuItem value={'80'}>80</MenuItem>
            <MenuItem value={'90'}>90</MenuItem>
            <MenuItem value={'100'}>100</MenuItem>
          </Select>
          </FormControl>
          

        <Button
          type={'submit'}
          variant={'contained'}
          color="primary"
          fullWidth
          margin='normal'>
          {isLoading ? <CircularProgress color={'inherit'} size={'24px'}></CircularProgress> : <ButtonForm>Criar</ButtonForm>}
        </Button>
      </FormLogin>
    </div>
  )
}

export default CreateTripPage