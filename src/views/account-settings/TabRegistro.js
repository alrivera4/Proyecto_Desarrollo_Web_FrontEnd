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
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'

import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import OutlinedInput from '@mui/material/OutlinedInput'

import Close from 'mdi-material-ui/Close'

import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Container } from '@mui/material'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Fecha de Nacimiento' fullWidth {...props} />
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [identificationNumber, setIdentificationNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [identificationType, setIdentificationType] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }
  const [open, setOpen] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleOpen = () => {
    setOpen(false)
    setShowSuccessMessage(true)
  }

  const handleOpen1 = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false)
    window.location.reload()
  }

  const handleNumberChange = event => {
    const input = event.target.value
    if (/^\d{0,10}$/.test(input)) {
      setIdentificationNumber(input)
    }
  }

  const handleFullNameChange = event => {
    const input = event.target.value
    if (/^[A-Za-z\s]*$/.test(input)) {
      setFullName(input)
    }
  }

  const handleLastNameChange = event => {
    const input = event.target.value
    if (/^[A-Za-z\s]*$/.test(input)) {
      setLastName(input)
    }
  }

  const handleEmailChange = event => {
    const input = event.target.value
    setEmail(input)
  }

  const handleTermsCheckboxChange = event => {
    setAcceptedTerms(event.target.checked)
  }

  const isFormValid = () => {
    // Perform the necessary validation checks for each field
    const isFullNameValid = fullName.trim() !== ''
    const isIdentificationNumberValid = /^\d{10}$/.test(identificationNumber)
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email)
    const isPasswordValid = password.trim() !== ''
    const isConfirmPasswordValid = confirmPassword === password

    return (
      isFullNameValid &&
      isIdentificationNumberValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      identificationType !== ''
    )
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={3}>
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
            <FormControl fullWidth>
              <InputLabel id='tipo-identificacion-label'>Tipo de Identificación</InputLabel>
              <Select
                labelId='tipo-identificacion-label'
                label='tipo-identificacion-label'
                value={identificationType}
                onChange={event => setIdentificationType(event.target.value)}
                error={!identificationType}
              >
                <MenuItem value='Cedula'>Cédula</MenuItem>
                <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              label='Nombre'
              placeholder=''
              fullWidth
              value={fullName}
              onChange={handleFullNameChange}
              inputProps={{ maxLength: 100 }}
              error={!fullName} // Add error state for empty field
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              label='N° de Identificación'
              placeholder=''
              fullWidth
              value={identificationNumber}
              onChange={handleNumberChange}
              inputProps={{ maxLength: 10 }}
              error={identificationNumber.length !== 10} // Add error state for invalid length
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              label='Apellido'
              placeholder=''
              fullWidth
              value={lastName}
              onChange={handleLastNameChange}
              inputProps={{ maxLength: 100 }}
              error={!lastName} // Add error state for empty field
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              type='email'
              label='Coreo Electrónico'
              placeholder='johnDoe@example.com'
              value={email}
              onChange={handleEmailChange}
              error={!email || !/^\S+@\S+\.\S+$/.test(email)} // Add error state for invalid email
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='password'
              label='Contraseña'
              placeholder=''
              value={password}
              onChange={event => setPassword(event.target.value)}
              error={!password}
            />
          </Grid>
          <Grid item xs={12} sm={6} mt={0}>
            <TextField
              fullWidth
              type='password'
              label='Confirmar Contraseña'
              placeholder=''
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
              error={password !== confirmPassword}
            />
          </Grid>
        </Grid>
      </form>

      <form>
        {isFormValid() && (
          <Grid container spacing={10} alignItems='center' justifyContent='center'>
            <Grid item xs={12} sm={6} mt={6}>
              <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} onClick={handleOpen1}>
                Siguiente
              </Button>
              <Container>
                <Dialog open={open} onClose={handleClose} maxWidth='200' maxLength='200' fullWidth>
                  <DialogTitle>Registrarme</DialogTitle>
                  <DialogContent
                    sx={{ width: '100%', height: '100%', display: '', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <DialogContentText>
                      <Container>
                        <h2>Términos y Condiciones</h2>
                        <p>
                          La Dirección de Administración del Talento Humano no se responsable por el contenido de la
                          documentación registrada y subida por postulante. La veracidad de la información que el
                          postulante entrega, es de su responsabilidad y podrá ser verificada por las instancias
                          correspondientes. En caso de falsedad u ocultamiento de información, el postulante se someterá
                          a la normativa que por esos hechos previne las leyes de la República. Los documentos que
                          consigna el postulante y que respalden ta información no podrán ser legible, impertinentes o
                          mutilados, en cuyo caso no serán considerados.
                        </p>
                        <p>
                          Los aspirantes deberán subir su hoja de vida conta documentación de respaldo que acredite el
                          cumplimiento de los requisitos y los méritos como son: Experiencia, formación, publicaciones y
                          los demás exigidos en la ley y reglamentación interna de la Universidad y demás habilitantes.{' '}
                        </p>
                        <p>Previo a la aceptación de términos, deberá considerar los siguientes aspectos: </p>
                        <p>
                          Escanear sus documentos personales correspondientes cédula y papeleta de votación actualizada,
                          formación (títulos de tercer y/o cuarto nivel con el respectivo registro de la SENEDCYT),
                          experiencia, cursos de capacitación, publicaciones de libres y artículos indexados, y en caso
                          de acciones afirmativas contar con los respectivos documentos de respaldo.
                        </p>
                        <p>
                          En la plataforma de postulación deberá llenar todos los campos solicitados INFORMACIÓN
                          PERSONAL PROFESIONAL, para proceder aplicar la OFERTA ACADÉMICA según el perfil del postulante
                          y el requerimiento académico convocado.
                        </p>
                        <p>
                          {' '}
                          La aplicación de la postulación se lo realizará a una sola plaza académica, muna que podrá ser
                          utilizada en la acción MI POSTULACIÓN{' '}
                        </p>
                        <p>Además, como requisitos generales:</p>
                        <ul>
                          <li>
                            No haber sido sancionado por las Universidades y Escuelas Politécnicas por el incumplimiento
                            de obligaciones establecidas en la Ley Orgánica de Educación Superior, sus Reglamentos y
                            demás normativa interna
                          </li>
                          <li>
                            Que todos los documentos presentados son de responsabilidad absoluta y gozan de autenticidad
                            y veracidad del postulantes
                          </li>
                          <li>
                            No poseer parentesco alguno de hasta el curso grado de consanguinidad y segundo de afinidad,
                            ser conyugo a mantener unión de hecho con:
                            <ul>
                              <li>Rector de la Universidad Nacional de Chimborazo</li>
                              <li>Señores/as Vicerrectores.</li>
                              <li>
                                Miembros del Organismo Colegiado Institucional (Consejo Universitario de la Universidad
                                Nacional de Chimborazo
                              </li>
                            </ul>
                          </li>
                          <li>
                            No estar inmerso en ninguna prohibición o inhabilidad establecida en la Constitución de la
                            República y ordenamiento jurídica •Estar en pleno ejercicio de los derechos previstos en la
                            Constitución de la publica y las leyes para el desempeño de una función pública
                          </li>
                        </ul>
                      </Container>
                    </DialogContentText>
                    <Grid item xs={12} ml={15}>
                      <FormControlLabel
                        control={<Checkbox checked={acceptedTerms} onChange={handleTermsCheckboxChange} />}
                        label='Acepto Términos y Condiciones'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        size='large'
                        variant='contained'
                        sx={{ marginBottom: 7 }}
                        onClick={handleOpen}
                        disabled={!acceptedTerms} // Disable the button if the checkbox is not checked
                      >
                        Siguiente
                      </Button>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Container>
            </Grid>
          </Grid>
        )}
      </form>
      <Dialog open={showSuccessMessage} onClose={handleCloseSuccessMessage} maxWidth="md" fullWidth>
        <DialogTitle>Éxito</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Usuario registrado con éxito.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessMessage}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </CardContent>
  )
}

export default TabRegister
