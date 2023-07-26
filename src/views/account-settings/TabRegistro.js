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
import Checkbox from '@mui/material/Checkbox';
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

  const handleTermsCheckboxChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }
  const [open, setOpen] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
            <Grid item xs={12} sm={6} md={6}>
              Nombre
              <TextField label='Nombre' placeholder='' />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            N° de Identificación
            <Grid item xs={12} sm={6}>
              <TextField type='number' label='N° de Identificación' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              {' '}
              Apellido
              <TextField label='Apellido' placeholder='' />
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
            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} onClick={handleOpen}>
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
                        correspondientes. En caso de falsedad u ocultamiento de información, el postulante se someterá a
                        la normativa que por esos hechos previne las leyes de la República. Los documentos que consigna
                        el postulante y que respalden ta información no podrán ser legible, impertinentes o mutilados,
                        en cuyo caso no serán considerados.</p>
                        <p>Los aspirantes deberán subir su hoja de vida conta
                        documentación de respaldo que acredite el cumplimiento de los requisitos y los méritos como son:
                        Experiencia, formación, publicaciones y los demás exigidos en la ley y reglamentación interna de
                        la Universidad y demás habilitantes. </p>
                        <p>Previo a la aceptación de términos, deberá considerar los
                        siguientes aspectos: </p>
                        <p>Escanear sus documentos personales correspondientes cédula y papeleta de
                        votación actualizada, formación (títulos de tercer y/o cuarto nivel con el respectivo registro
                        de la SENEDCYT), experiencia, cursos de capacitación, publicaciones de libres y artículos
                        indexados, y en caso de acciones afirmativas contar con los respectivos documentos de respaldo.</p>
                        <p>En la plataforma de postulación deberá llenar todos los campos solicitados INFORMACIÓN PERSONAL
                        PROFESIONAL, para proceder aplicar la OFERTA ACADÉMICA según el perfil del postulante y el
                        requerimiento académico convocado.</p>
                        <p> La aplicación de la postulación se lo realizará a una sola
                        plaza académica, muna que podrá ser utilizada en la acción MI POSTULACIÓN </p>
                        <p>Además, como
                        requisitos generales:</p>
                        <ul>
                          <li>
                            No haber sido sancionado por las Universidades y Escuelas Politécnicas por el
                            incumplimiento de obligaciones establecidas en la Ley Orgánica de Educación Superior, sus
                            Reglamentos y demás normativa interna
                          </li>
                          <li>
                            Que todos los documentos presentados son de responsabilidad absoluta y gozan de
                            autenticidad y veracidad del postulantes
                          </li>
                          <li>
                            No poseer parentesco alguno de hasta el curso grado de consanguinidad y segundo de
                            afinidad, ser conyugo a mantener unión de hecho con:
                            <ul>
                              <li>Rector de la Universidad Nacional de
                            Chimborazo</li>
                            <li>Señores/as Vicerrectores.</li>
                            <li>Miembros del Organismo Colegiado Institucional (Consejo Universitario de la Universidad
                            Nacional de Chimborazo</li>
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
            label="Acepto Términos y Condiciones"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            size="large"
            variant="contained"
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
      </form>
    </CardContent>
  )
}

export default TabRegister
