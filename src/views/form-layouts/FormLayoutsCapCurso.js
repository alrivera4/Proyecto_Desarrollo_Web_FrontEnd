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
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'


const FormLayoutsCapCurso = () => {
  // ** States
  const [file, setFile] = useState(null);
  const [evento, setEvento] = useState('');
  const [eventoError, setEventoError] = useState('');
  const [certifica, setCertifica] = useState('');
  const [certificaError, setCertificaError] = useState('');
  const [duracion, setDuracion] = useState('');
  const [duracionError, setDuracionError] = useState('');
  const [capacitacionType, setCapacitacionType] = useState('');
  const [capacitacionTypeError, setCapacitacionTypeError] = useState('');
  const [areaType, setAreaType] = useState('');
  const [areaTypeError, setAreaTypeError] = useState('');
  const [subareaType, setSubareaType] = useState('');
  const [subareaTypeError, setSubareaTypeError] = useState('');
  const [campoType, setCampoType] = useState('');
  const [campoTypeError, setCampoTypeError] = useState('');
  const [ingresoStart, setIngresoStart] = useState('');
  const [ingresoStartError, setIngresoStartError] = useState('');
  const [salidaEnd, setSalidaEnd] = useState('');
  const [salidaEndError, setSalidaEndError] = useState('');


  const isValidNumber = (value) => /^\d+$/.test(value);

  const isLettersAndSpacesOnly = (value) => /^[a-zA-Z\s]*$/.test(value);

  const isValidDate = (value) => {
    return !isNaN(Date.parse(value));
  };


  // Handle File Upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;

    // Validate "Evento"
    if (!isLettersAndSpacesOnly(evento)) {
      setEventoError('Evento should only contain letters and spaces');
      formIsValid = false;
    } else {
      setEventoError('');
    }

    // Validate "Certifica"
    if (!isLettersAndSpacesOnly(certifica)) {
      setCertificaError('Certifica should only contain letters and spaces');
      formIsValid = false;
    } else {
      setCertificaError('');
    }

    // Validate "Duracion"
    if (!isValidNumber(duracion)) {
      setDuracionError('Duración should only contain numbers');
      formIsValid = false;
    } else {
      setDuracionError('');
    }

    // Validate "Tipo de Capacitacion"
    if (!capacitacionType) {
      // Assuming that the initial value of contractType is an empty string
      // Change this if the initial value is different
      setCapacitacionTypeError('Please select a Tipo de Capacitación');
      formIsValid = false;
    } else {
      setCapacitacionTypeError('');
    }

    // Validate "Area"
    if (!areaType) {
      // Assuming that the initial value of institutionType is an empty string
      // Change this if the initial value is different
      setAreaTypeError('Please select a Tipo de Área');
      formIsValid = false;
    } else {
      setAreaTypeError('');
    }

    // Validate "Subarea"
    if (!subareaType) {
      // Assuming that the initial value of experienceType is an empty string
      // Change this if the initial value is different
      setSubareaTypeError('Please select a Tipo de Subárea');
      formIsValid = false;
    } else {
      setSubareaTypeError('');
    }

    // Validate "Campo"
    if (!campoType) {
      // Assuming that the initial value of experienceType is an empty string
      // Change this if the initial value is different
      setCampoTypeError('Please select a Tipo de Campo');
      formIsValid = false;
    } else {
      setCampoTypeError('');
    }

    // Validate "Ingreso" date format
    if (!ingresoStart) {
      setIngresoStartError('Please enter the start date');
      formIsValid = false;
    } else if (!isValidDate(ingresoStart)) {
      setIngresoStartError('Please enter a valid date (YYYY-MM-DD)');
      formIsValid = false;
    } else {
      setIngresoStartError('');
    }


    // Validate "Salida" date format
    if (!salidaEnd) {
      setSalidaEndError('Please enter the end date');
      formIsValid = false;
    } else if (!isValidDate(salidaEnd)) {
      setSalidaEndError('Please enter a valid date (YYYY-MM-DD)');
      formIsValid = false;
    } else {
      setSalidaEndError('');
    }

    if (formIsValid) {
      // Show confirmation alert before submitting the form
      const confirmResult = window.confirm('¿Está seguro de guardar los datos del formulario?');

      if (confirmResult) {
        // Perform the form submission logic here
        console.log('Form submitted successfully');

        // Clear the form data after successful submission
        setEvento('');
        setCertifica('');
        setDuracion('');
        setFile(null);
        setCapacitacionType('');
        setAreaType('');
        setSubareaType('');
        setCampoType('');
        setIngresoStart('');
        setSalidaEnd('');
      } else {
        console.log('Form submission canceled');
      }
    }
  };

  return (
    <Card>
      <CardHeader title='Cursos' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Evento</Typography>
            <TextField
              fullWidth
              placeholder=''
              value={evento}
              onChange={(e) => setEvento(e.target.value)}
              error={!!eventoError}
              helperText={eventoError}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Certifica</Typography>
            <TextField
              fullWidth
              placeholder=''
              value={certifica}
              onChange={(e) => setCertifica(e.target.value)}
              error={!!certificaError}
              helperText={certificaError}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Duración-Horas</Typography>
            <TextField
              fullWidth
              placeholder=''
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              error={!!duracionError}
              helperText={duracionError}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Tipo de Capacitación</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='capacitacion-type-label'
                label='Tipo de Capacitación'
                value={capacitacionType}
                onChange={(e) => setCapacitacionType(e.target.value)}
                error={!!capacitacionTypeError}
              >
                <MenuItem value='Cap1'>Técnica o Profesional</MenuItem>
                <MenuItem value='Cap2'>Gerencial y Liderazgo</MenuItem>
                <MenuItem value='Cap3'>Ventas y Servicio al Cliente</MenuItem>
                <MenuItem value='Cap4'>Seguridad Laboral</MenuItem>
                <MenuItem value='Cap5'>Trabajo en Equipo</MenuItem>
              </Select>
              {capacitacionTypeError && <Typography variant='body2' color='error'>{capacitacionTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Área</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='area-type-label'
                label='Área'
                value={areaType}
                onChange={(e) => setAreaType(e.target.value)}
                error={!!areaTypeError}
              >
                <MenuItem value='Area1'>TI</MenuItem>
                <MenuItem value='Area2'>Salud</MenuItem>
                <MenuItem value='Area3'>Educación</MenuItem>
                <MenuItem value='Area4'>Finanzas</MenuItem>
                <MenuItem value='Area5'>Ingeniería</MenuItem>
                <MenuItem value='Area6'>Marketing</MenuItem>
              </Select>
              {areaTypeError && <Typography variant='body2' color='error'>{areaTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Subárea</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='subarea-type-label'
                label='Subárea'
                value={subareaType}
                onChange={(e) => setSubareaType(e.target.value)}
                error={!!subareaTypeError}
              >
                <MenuItem value='Subarea1'>Desarrollo de software</MenuItem>
                <MenuItem value='Subarea2'>Fisioterapia y rehabilitación</MenuItem>
                <MenuItem value='Subarea3'>Educación a distancia</MenuItem>
                <MenuItem value='Subarea4'>Auditoría interna</MenuItem>
                <MenuItem value='Subarea5'>Ingeniería civil</MenuItem>
                <MenuItem value='Subarea6'>Marketing digital</MenuItem>
              </Select>
              {subareaTypeError && <Typography variant='body2' color='error'>{subareaTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Campo</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='campo-type-label'
                label='Campo'
                value={campoType}
                onChange={(e) => setCampoType(e.target.value)}
                error={!!campoTypeError}
              >
                <MenuItem value='Campo1'>Agricultura y agroindustria</MenuItem>
                <MenuItem value='Campo2'>Turismo y hotelería:</MenuItem>
                <MenuItem value='Campo3'>Investigación y desarrollo</MenuItem>
                <MenuItem value='Campo4'>Industria manufacturera</MenuItem>
                <MenuItem value='Campo5'>Servicios al cliente</MenuItem>
                <MenuItem value='Campo6'>Administración y gestión</MenuItem>
              </Select>
              {campoTypeError && <Typography variant='body2' color='error'>{campoTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Fecha Ingreso</Typography>
              <InputLabel id='form-layouts-separator-select-label-2'></InputLabel>
              <TextField
                fullWidth
                type='date'
                value={ingresoStart}
                onChange={(e) => setIngresoStart(e.target.value)}
                error={!!ingresoStartError}
                helperText={ingresoStartError}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Fecha Salida</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <TextField
                fullWidth
                type='date'
                value={salidaEnd}
                onChange={(e) => setSalidaEnd(e.target.value)}
                error={!!salidaEndError}
                helperText={salidaEndError}
              />
            </FormControl>
          </Grid>
        </Grid>
        <br></br>
        <Divider sx={{ margin: 0 }} />
        <br></br>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            Certificado
          </Typography>
        </Grid>
        <br></br>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <input
            accept=".pdf"
            id="document-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="document-upload" sx={{ marginBottom: '10px' }}>
            <Button
              variant="outlined"
              component="span"
              fullWidth
              size="large"
              startIcon={<CloudUploadIcon />}
            >
              Add Documents (PDF)
            </Button>
          </label>
          {file && <Typography variant="body2">{file.name}</Typography>}
        </Grid>
        <Divider sx={{ margin: 0 }} />
        <br></br>
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsCapCurso