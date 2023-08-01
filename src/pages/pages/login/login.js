// ** React Imports

import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import { Container } from '@mui/material'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' },
  backgroundColor: {} // This will remove the background color
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  const [values, setValues] = useState({
    cedula: '',
    password: '',
    showPassword: false,
    cedulaError: false,
    passwordError: false,
  })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleChange = prop => event => {
    if (prop === 'cedula') {
      // Verificar que solo se ingresen números en el campo "cedula"
      const cedulaValue = event.target.value
      if (/^\d{0,10}$/.test(cedulaValue)) {
        setValues({ ...values, [prop]: cedulaValue, cedulaError: false }) // Reset cedulaError when the input is valid
      } else {
        setValues({ ...values, [prop]: cedulaValue, cedulaError: true }) // Set cedulaError to true when the input is invalid
      }
    } else if (prop === 'password') {
      // Verificar que el campo "password" no esté vacío
      const passwordValue = event.target.value
      setValues({ ...values, [prop]: passwordValue, passwordError: passwordValue.trim() === '' }) // Set passwordError to true when the password is empty
    } else {
      setValues({ ...values, [prop]: event.target.value })
    }
  };


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const isFormValid = () => {
    const isCedulaValid = /^\w{10}$/.test(values.cedula)

    const isPasswordValid = values.password.trim() !== ''

    return isCedulaValid && isPasswordValid
  }

  const handleSubmit = e => {
    e.preventDefault()

    const isCedulaValid = /^\d{10}$/.test(values.cedula);
    const isPasswordValid = values.password.trim() !== '';

    setValues({
      ...values,
      cedulaError: !isCedulaValid,
      passwordError: !isPasswordValid,
    });

    if (isCedulaValid && isPasswordValid) {
      // Redirect to the external page or perform form submission here
      window.location.href = '/pages/dashboard';
    } else {
      // Show an error message or perform some error handling here
      console.log('Please fill in all fields correctly');
    }
  };

  // ** State

  return (
    <Box>
      <Container>
        <Box sx={{ mb: 6 }}>
          <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
            Postula Aquí
          </Typography>
          <Typography variant='body2'>Forma parte de la Comunidad de la ESPE</Typography>
        </Box>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            id='cedula'
            label='N° de Identificación'
            value={values.cedula}
            onChange={handleChange('cedula')}
            InputProps={{
              inputProps: {
                pattern: '[0-9]*',
                maxLength: 10
              }
            }}
            required
            error={values.cedulaError} // Apply error style when cedulaError is true
            helperText={values.cedulaError ? 'Ingrese un N° de Identificación válido' : ''} // Display error message when cedulaError is true
            sx={{ marginBottom: 4 }}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor='auth-login-password'>Contraseña</InputLabel>
            <OutlinedInput
              label='Password'
              value={values.password}
              id='auth-login-password'
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    aria-label='toggle password visibility'
                  >
                    {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                  </IconButton>
                </InputAdornment>
              }
              required
              error={values.passwordError} // Apply error style when passwordError is true
              helperText={values.passwordError ? 'Este campo es obligatorio' : ''} // Display error message when passwordError is true
              sx={{ marginBottom: 4 }}
            />
          </FormControl>
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'left', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox />} label='Recuerdame' />
          </Box>
          <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
            Iniciar Sesión
          </Button>
        </form>
        <FooterIllustrationsV1 />
      </Container>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
