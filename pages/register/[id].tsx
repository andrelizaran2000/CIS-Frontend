// Modules
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { blueGrey, grey } from '@mui/material/colors';
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';

// Components
import GlobalContainer from '../../components/containers/GlobalContainer';
import PaddingContainer from '../../components/containers/PaddingContainer';

// Hooks
import useAllRequests from '../../queries/useAllRequests';

// Types
import { RegisterSubeventData, SchoolOrCarrerData } from '../../types/general';

const initialState:RegisterSubeventData = {
  controlNumber:'',
  name:'',
  email:'',
  school:0,
  career:0,
  id:0
}

export default function Register () {

  const router = useRouter()
  const { id } = router.query;
  const [ formValues, setFormValues ] = useState(initialState);
  const { email, name, controlNumber, school } = formValues;
  const { useSubmitRegisterSubeventMutation } = useAllRequests();
  const { mutate, isLoading } = useSubmitRegisterSubeventMutation(onSuccess);

  function validateForm () {
    if (school === 1) {
      if (!email || !name || !controlNumber || !controlNumber) {
        alert('Es necesario ingresar todos los datos del formulario');
        return false;
      } return true;
    } else {
      if (!email || !name) {
        alert('Es necesario ingresar todos los datos del formulario');
        return false;
      } else return true;
    }
  }

  function submitRegister () {
    if (!validateForm()) return;
    mutate({ ...formValues, id:Number(id) });
  }

  function handleForm (name:string, value:string) {
    setFormValues({ ...formValues, [name]:value });
  }

  function onSuccess () {
    setFormValues(initialState);
    router.push('/events');
  }

  return (
    <GlobalContainer title='Registrarse'>
      <PaddingContainer backgroundColor={grey[200]}>
        <Grid container spacing={{ xs:4, sm:20 }} sx={{ paddingY:20 }}>
          <Grid item sm={5} lg={4} sx={{ display:{ xs:'none', sm:'flex' }, flexDirection:'column', justifyContent:'center' }}>
            <img src='/assets/register/main.png'/>
          </Grid>
          <Grid item xs={12} sm={7} lg={8} sx={{ color:blueGrey[900], display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <form onSubmit={(e) => { e.preventDefault(); submitRegister() }} style={{ display:'flex', flexDirection:'column' }}>
              <Paper sx={{ display:'flex', flexDirection:'column', padding:4, alignItemms:'center', rowGap:2 }}>
                <Typography variant='h5' sx={{ textAlign:'center', color:blueGrey[900] }}>
                  <b>Regístrate</b>
                </Typography>
                <SchoolAndCareerSelect
                  schoolValue={formValues.school}
                  careerValue={formValues.career}
                  handleForm={handleForm}
                  isSubmiting={isLoading}
                />
                { 
                  formValues.school === 1 && 
                  <TextField
                    label='Matrícula'
                    onChange={(e) => handleForm(e.target.name, e.target.value)}
                    name='controlNumber'
                    disabled={isLoading}
                    value={controlNumber}
                  />
                }
                <TextField
                  label='Nombre completo'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='name'
                  disabled={isLoading}
                  value={name}
                />
                <TextField
                  label='Correo electrónico' type='email'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='email'
                  disabled={isLoading}
                  value={email}
                />
                <Button variant='contained' type='submit'>Registrarse</Button>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </PaddingContainer>
    </GlobalContainer>
  )
}

function SchoolAndCareerSelect ({ careerValue, schoolValue, handleForm, isSubmiting }:any) {

  const { useGetSchoolsAndCareersQuery } = useAllRequests();
  const { isLoading, data } = useGetSchoolsAndCareersQuery();
  const [ careers, setCareers ] = useState<SchoolOrCarrerData[]>([]);
  const [ schools, setSchools ] = useState<SchoolOrCarrerData[]>([]);

  useEffect(() => {
    if (data !== undefined) {
      setCareers(data.data.careers)
      setSchools(data.data.schools)
    }
  }, [data])

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Escuela</InputLabel>
        <Select
          label="Escuela"
          value={schoolValue}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
          disabled={isLoading || isSubmiting}
          name='school'
        >
          {schools.map(({ id, name }, key) => <MenuItem value={id} key={key}>{name}</MenuItem>)}
        </Select>
      </FormControl>

      {
        schoolValue === 1 &&
        <FormControl fullWidth>
          <InputLabel>Carrera</InputLabel>
          <Select
            label="Carrera"
            value={careerValue}
            onChange={(e) => handleForm(e.target.name, e.target.value)}
            disabled={isLoading || isSubmiting}
            name='career'
          >
            {careers.map(({ id, name }, key) => <MenuItem value={id} key={key}>{name}</MenuItem>)}
          </Select>
        </FormControl>
      }
    </>
  )
}