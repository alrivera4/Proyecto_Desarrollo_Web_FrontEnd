// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'

import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import OutlinedInput from '@mui/material/OutlinedInput'

import Close from 'mdi-material-ui/Close'

import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabRegister = () => {
  // ** State
  const [date, setDate] = useState(null)
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Foto
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Permitido PNG or JPEG. Tamaño maximo 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            Tipo de Identificación
            <FormControl fullWidth>
              <Select label='Cedula'>
                <MenuItem value='Cedula'>Cédula</MenuItem>
                <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12} sm={6} md={7}>
            Nombre
            <TextField  label='Nombre' placeholder='' />
          </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            N° de Identificación
            <Grid item xs={12} sm={6}>
              <TextField type='number' label='N° de Identificación' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6} md={7}> Apellido
            <TextField  label='Apellido' placeholder='' />
          </Grid>
          </Grid>
        </Grid>
      </form>

      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6} md={6}>
            Email
            <TextField fullWidth type='email' label='Email' placeholder='johnDoe@example.com' />
          </Grid>
          <Grid item xs={12} sm={6}>
            Nueva Contraseña
            <TextField fullWidth type='password' label='Password' placeholder='password' />
          </Grid>
          <Grid item xs={12} sm={6} mt={0}>
            Contraseña
            <TextField fullWidth type='password' label='Password' placeholder='password' />
          </Grid>

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabRegister
