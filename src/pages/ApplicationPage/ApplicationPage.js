import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { ButtonForm, FormLogin, PlaceTitle } from './Styled'
import axios from "axios"
import useForm from '../../Hooks/UseForm'
import { UseTripsList } from '../../Hooks/UseTripsList'

const ApplicationPage = () => {
  const [isLoading, setIsloading] = useState(false)
 const trips = UseTripsList()
  const [form, onChange, clear] = useForm({
    name:'',
    age:0, 
    applicationText:'',
    profession:'',
    country:'', 
    trip:null
  })

  
  const onSubmitForm = (event) =>{
    setIsloading(true)
    event.preventDefault()
    const body ={
      name:form.name, 
      age:form.age, 
      applicationText:form.applicationText, 
      profession:form.profession, 
      country:form.country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips/${form.trip.id}/apply`, body)
    .then((res) =>{
      alert(res.data.message)
      clear()
      setIsloading(false)
    })
    .catch((err) =>{
      console.log(err)
      setIsloading(false)
    })
  }


  return (
    <div>
      <PlaceTitle>
        <h2>Aplicar para viagem</h2>
      </PlaceTitle>
      <FormLogin onSubmit={onSubmitForm}>
        <TextField
          label="Nome do candidato"
          type={'text'}
          variant={"outlined"}
          fullWidth
          margin='normal'
          required
          onChange={onChange}
          value={form.name}
          name={"name"}
        />

        <TextField
          label="Idade"
          type={'number'}
          variant={"outlined"}
          fullWidth
          margin='normal'
          required
          onChange={onChange}
          value={form.age}
          name={"age"}
        />
        
        <TextField
         helperText="Explique por que você merece ralizar a viagem"
          label="Texto de aplicação"
          type={'text'}
          variant={"outlined"}
          fullWidth
          margin='normal'
          required
          onChange={onChange}
          value={form.applicationText}
          name={"applicationText"}
        />
        <TextField
          label="Profissão"
          type={'text'}
          variant={"outlined"}
          fullWidth
          margin='normal'
          required
          onChange={onChange}
          value={form.profession}
          name={"profession"}
        />
        <FormControl margin='normal' fullWidth id={"select-vigens"}>
        <InputLabel labelId={"select-país"}>País</InputLabel>
        <Select 
        onChange={onChange}
          value={form.country}
          name={"country"}>
           <MenuItem value={"Estados unidos"}>Estados unidos</MenuItem>
           <MenuItem value={"Canadá"}>Canadá</MenuItem>
           <MenuItem value={"Mexíco"}>Mexíco</MenuItem>
           <MenuItem value={"Argentina"}>Argentina</MenuItem>
           <MenuItem value={"Chile"}>Chile</MenuItem>
           <MenuItem value={"Brasil"}>Brasil</MenuItem>
           <MenuItem value={"Portugal"}>Portugal</MenuItem>
           <MenuItem value={"Espanha"}>Espanha</MenuItem>
           <MenuItem value={"França"}>França</MenuItem>
           <MenuItem value={"Japão"}>Japão</MenuItem>
           <MenuItem value={"China"}>China</MenuItem>
           <MenuItem value={"Inglaterra"}>Inglaterra</MenuItem>
           <MenuItem value={"Alemanha"}>Alemanha</MenuItem>
           <MenuItem value={"Russia"}>Russia</MenuItem>
           <MenuItem value={"Coréia"}>Coréia</MenuItem>
           <MenuItem value={"Africa do Sul"}>Africa do Sul</MenuItem>
        </Select>
        </FormControl>

        <FormControl margin='normal' fullWidth id={"select-vigens"}>
        <InputLabel labelId={"select-viagens"}>Viagens</InputLabel>
        <Select 
        onChange={onChange}
          value={form.trip}
          name={"trip"}>
          {trips.map((trip) =>{
            return <MenuItem value={trip}>{trip.name}</MenuItem> 
          })}
        </Select>
        </FormControl>
        <br></br>
        <Button
          type={'submit'}
          variant={'contained'}
          color="primary"
          fullWidth
          margin='normal'>
          {isLoading ? <CircularProgress color={'inherit'} size={'24px'}></CircularProgress> : <ButtonForm>Inscreva-se</ButtonForm>}
        </Button>
      </FormLogin>
    </div>
  )
}

export default ApplicationPage