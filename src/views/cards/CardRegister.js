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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TabRegister from 'src/views/account-settings/TabRegistro'


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

const RegisterCard = () => {
  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleChange = prop => event => {
    if (prop === 'cedula') {
      // Verificar que solo se ingresen números en el campo "cedula"
      const cedulaValue = event.target.value
      if (/^\d*$/.test(cedulaValue)) {
        setValues({ ...values, [prop]: cedulaValue })
      }
    } else {
      setValues({ ...values, [prop]: event.target.value })
    }
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const isFormValid = () => {
    return values.cedula.trim() !== '' && values.password.trim() !== ''
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!isFormValid()) {
      // Show an error message or perform some error handling here
      console.log('Please fill in all fields')
    }
  }

  return (
    <Box mt={5}>
      <Container>
        <Box sx={{ mb: 6 }}>
          <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
            Registrate aquí
          </Typography>
          <Typography variant='body2'>Forma parte de la Comunidad de la UNACH</Typography>
        </Box>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
        <TextField
            autoFocus
            fullWidth
            id='cedula'
            label='Cédula'
            value={values.cedula}
            onChange={handleChange('cedula')}
            InputProps={{
              inputProps: {
                pattern: '[0-9]*',
                maxLength: 10
              }
            }}
            required
            sx={{ marginBottom: 4 }}
          />
          <Button
  fullWidth
  size='large'
  variant='contained'
  sx={{ marginBottom: 7 }}
  onClick={handleOpen}
>
  Siguiente
</Button>

        </form>
      </Container>
      <FooterIllustrationsV1 />

      <Dialog open={open} onClose={handleClose} maxWidth="200" maxLength="200" fullWidth>
        <DialogTitle>Registrarme</DialogTitle>
        <DialogContent sx={{ width: '100%', height: '100%', display: '', justifyContent: 'center', alignItems: 'center' }}>
          <DialogContentText>
            <Container>
            <TabRegister/>
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
RegisterCard.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default RegisterCard
