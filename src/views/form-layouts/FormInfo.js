// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Fecha de Nacimiento' autoComplete='off' />
})

const FormInfo = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)
  const [identificationImage, setIdentificationImage] = useState(null)
  const [votingCardImage, setVotingCardImage] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  const handleIdentificationImageUpload = event => {
    const file = event.target.files[0]
    setIdentificationImage(file)
  }

  const handleVotingCardImageUpload = event => {
    const file = event.target.files[0]
    setVotingCardImage(file)
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Información Personal del Postulante' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5} alignItems='center'>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Información Personal
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Tipo de Documento</InputLabel>
                <Select
                  label='Tipo de Documento'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Cedula'>Cédula</MenuItem>
                  <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='No. Documento' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Denominación' placeholder='Leonard' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Nombre(s)' placeholder='Lucia' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Apellidos(s)' placeholder='Salazar' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={date => setDate(date)}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-select-label'>País de Nacimiento</InputLabel>
                  <Select
                    label='País de Nacimiento'
                    defaultValue=''
                    id='form-layouts-separator-select'
                    labelId='form-layouts-separator-select-label'
                  >
                    <MenuItem value='Afghanistan'>Afghanistan</MenuItem>
                    <MenuItem value='Argentina'>Argentina</MenuItem>
                    <MenuItem value='Brazil'>Brazil</MenuItem>
                    <MenuItem value='Canada'>Canada</MenuItem>
                    <MenuItem value='China'>China</MenuItem>
                    <MenuItem value='Ecuador'>Ecuador</MenuItem>
                    <MenuItem value='Egypt'>Egypt</MenuItem>
                    <MenuItem value='France'>France</MenuItem>
                    <MenuItem value='India'>India</MenuItem>
                    <MenuItem value='Italy'>Italy</MenuItem>
                    <MenuItem value='Saudi Arabia'>Saudi Arabia</MenuItem>
                    <MenuItem value='Spain'>Spain</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                    <MenuItem value='United Kingdom'>United Kingdom</MenuItem>
                    <MenuItem value='United States'>United States</MenuItem>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>País de Nacimiento</InputLabel>
                        <Select
                          label='País de Nacimiento'
                          defaultValue=''
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Afghanistan'>Afghanistan</MenuItem>
                          <MenuItem value='Argentina'>Argentina</MenuItem>
                          <MenuItem value='Brazil'>Brazil</MenuItem>
                          <MenuItem value='Canada'>Canada</MenuItem>
                          <MenuItem value='China'>China</MenuItem>
                          <MenuItem value='Ecuador'>Ecuador</MenuItem>
                          <MenuItem value='Egypt'>Egypt</MenuItem>
                          <MenuItem value='France'>France</MenuItem>
                          <MenuItem value='India'>India</MenuItem>
                          <MenuItem value='Italy'>Italy</MenuItem>
                          <MenuItem value='Saudi Arabia'>Saudi Arabia</MenuItem>
                          <MenuItem value='Spain'>Spain</MenuItem>
                          <MenuItem value='Germany'>Germany</MenuItem>
                          <MenuItem value='United Kingdom'>United Kingdom</MenuItem>
                          <MenuItem value='United States'>United States</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-select-label'>País de Nacimiento</InputLabel>
                  <Select
                    label='País de Nacimiento'
                    defaultValue=''
                    id='form-layouts-separator-select'
                    labelId='form-layouts-separator-select-label'
                  >
                    <MenuItem value='Afgano'>Afgano</MenuItem>
                    <MenuItem value='Argentino'>Argentino</MenuItem>
                    <MenuItem value='Brasileño'>Brasileño</MenuItem>
                    <MenuItem value='Canadiense'>Canadiense</MenuItem>
                    <MenuItem value='Chino'>Chino</MenuItem>
                    <MenuItem value='Ecuatoriano'>Ecuatoriano</MenuItem>
                    <MenuItem value='Egipcio'>Egipcio</MenuItem>
                    <MenuItem value='Francés'>Francés</MenuItem>
                    <MenuItem value='Indio'>Indio</MenuItem>
                    <MenuItem value='Italiano'>Italiano</MenuItem>
                    <MenuItem value='Saudí'>Saudí</MenuItem>
                    <MenuItem value='Español'>Español</MenuItem>
                    <MenuItem value='Alemán'>Alemán</MenuItem>
                    <MenuItem value='Británico'>Británico</MenuItem>
                    <MenuItem value='Estadounidense'>Estadounidense</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Correo Electrónico' placeholder='usuario@ejemplo.com' />
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Información Adicional
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Sexo</InputLabel>
                <Select
                  label='Sexo'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Cedula'>Femenino</MenuItem>
                  <MenuItem value='Pasaporte'>Másculino</MenuItem>
                  <MenuItem value='Pasaporte'>Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Estado Cívil</InputLabel>
                <Select
                  label='SEstado Cívil'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Soltero'>Soltero</MenuItem>
                  <MenuItem value='Casado'>Casado</MenuItem>
                  <MenuItem value='Divorciado'>Divorciado</MenuItem>
                  <MenuItem value='Viudo'>Viudo</MenuItem>
                  <MenuItem value='Unión Libre'>Unión Libre</MenuItem>
                  <MenuItem value='Separado'>Separado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Información del Domicilio
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Dirección' placeholder='Dirección' />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} mt={5}>
                  <TextField fullWidth label='Teléfono del Domicilio' placeholder='02 -2675698' />
                </Grid>
                <Grid item xs={12} sm={6} mt={5}>
                  <TextField fullWidth label='Celular' placeholder='+593 997 765 299' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                4. Información Profesional
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Perfil Profesional' placeholder='Perfil Profesional' />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  5. Imagenes de Documentos
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} mt={5}>
                <input
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='identification-image-upload-button'
                  type='file'
                  onChange={handleIdentificationImageUpload}
                />
                <label htmlFor='identification-image-upload-button'>
                  <Button variant='contained' component='span'>
                    Subir Imagen Cédula
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={6} mt={5}>
                <input
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='voting-card-image-upload-button'
                  type='file'
                  onChange={handleVotingCardImageUpload}
                />
                <label htmlFor='voting-card-image-upload-button'>
                  <Button variant='contained' component='span'>
                    Subir Imagen Papeleta de Votación
                  </Button>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormInfo
