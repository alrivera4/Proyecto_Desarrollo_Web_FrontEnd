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


const FormLayoutsCapIdioma = () => {
  // ** States
  const [file, setFile] = useState(null);
  const [certificacion, setCertificacion] = useState('');
  const [certificacionError, setCertificacionError] = useState('');
  const [idiomaType, setIdiomaType] = useState('');
  const [idiomaTypeError, setIdiomaTypeError] = useState('');
  const [escritoType, setEscritoType] = useState('');
  const [escritoTypeError, setEscritoTypeError] = useState('');
  const [oralType, setOralType] = useState('');
  const [oralTypeError, setOralTypeError] = useState('');
  const [comprensionType, setComprensionType] = useState('');
  const [comprensionTypeError, setComprensionTypeError] = useState('');

  const isLettersAndSpacesOnly = (value) => /^[a-zA-Z\s]*$/.test(value);

  // Handle File Upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

      let formIsValid = true;
  
      // Validate "Certificacion"
      if (!isLettersAndSpacesOnly(certificacion)) {
        setCertificacionError('Evento should only contain letters and spaces');
        formIsValid = false;
      } else {
        setCertificacionError('');
      }
  
      // Validate "Idioma"
      if (!idiomaType) {
        setIdiomaTypeError('Please select a Idioma');
        formIsValid = false;
      } else {
        setIdiomaTypeError('');
      }
  
      // Validate "Nivel Escrito"
      if (!escritoType) {
        setEscritoTypeError('Please select Nivel Escrito');
        formIsValid = false;
      } else {
        setEscritoTypeError('');
      }
  
      // Validate "Nivel Oral"
      if (!oralType) {
        setOralTypeError('Please select Nivel Oral');
        formIsValid = false;
      } else {
        setOralTypeError('');
      }

      // Validate "Comprension"
      if (!comprensionType) {
        setComprensionTypeError('Please select Comprension');
        formIsValid = false;
      } else {
        setComprensionTypeError('');
      }
  

      if (formIsValid) {
        console.log('Form submitted successfully');


        // Clear the form data after successful submission
        setCertificacion('');
        setFile(null);
        setIdiomaType('');
        setEscritoType('');
        setOralType('');
        setComprensionType('');
      }
    };

  return (
    <Card>
      <CardHeader title='Experiencia Profesional' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Certificación</Typography>
            <TextField 
              fullWidth 
              placeholder=''
              value={certificacion}
              onChange={(e) => setCertificacion(e.target.value)}
              error={!!certificacionError}
              helperText={certificacionError}
              required  
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Idioma</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='idioma-type-label'
                label='Idioma'
                value={idiomaType}
                onChange={(e) => setIdiomaType(e.target.value)}
                error={!!idiomaTypeError}
              >
                <MenuItem value='Cap1'>Técnica o Profesional</MenuItem>
                <MenuItem value='Cap2'>Gerencial y Liderazgo</MenuItem>
                <MenuItem value='Cap3'>Ventas y Servicio al Cliente</MenuItem>
                <MenuItem value='Cap4'>Seguridad Laboral</MenuItem>
                <MenuItem value='Cap5'>Trabajo en Equipo</MenuItem>
              </Select>
              {idiomaTypeError && <Typography variant='body2' color='error'>{idiomaTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Divider sx={{ margin: 0 }} />
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Nivel Escrito</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='escrito-type-label'
                label='Nivel Escrito'
                value={escritoType}
                onChange={(e) => setEscritoType(e.target.value)}
                error={!!escritoTypeError}
              >
                <MenuItem value='Area1'>TI</MenuItem>
                <MenuItem value='Area2'>Salud</MenuItem>
                <MenuItem value='Area3'>Educación</MenuItem>
                <MenuItem value='Area4'>Finanzas</MenuItem>
                <MenuItem value='Area5'>Ingeniería</MenuItem>
                <MenuItem value='Area6'>Marketing</MenuItem>
              </Select>
              {escritoTypeError && <Typography variant='body2' color='error'>{escritoTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Divider sx={{ margin: 0 }} />
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Nivel Oral</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='oral-type-label'
                label='Nivel Oral'
                value={oralType}
                onChange={(e) => setOralType(e.target.value)}
                error={!!oralTypeError}
              >
                <MenuItem value='Subarea1'>Desarrollo de software</MenuItem>
                <MenuItem value='Subarea2'>Fisioterapia y rehabilitación</MenuItem>
                <MenuItem value='Subarea3'>Educación a distancia</MenuItem>
                <MenuItem value='Subarea4'>Auditoría interna</MenuItem>
                <MenuItem value='Subarea5'>Ingeniería civil</MenuItem>
                <MenuItem value='Subarea6'>Marketing digital</MenuItem>
              </Select>
              {oralTypeError && <Typography variant='body2' color='error'>{oralTypeError}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Comprensión</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='comprension-type-label'
                label='Comprensión'
                value={comprensionType}
                onChange={(e) => setComprensionType(e.target.value)}
                error={!!comprensionTypeError}
              >
                <MenuItem value='Campo1'>Agricultura y agroindustria</MenuItem>
                <MenuItem value='Campo2'>Turismo y hotelería:</MenuItem>
                <MenuItem value='Campo3'>Investigación y desarrollo</MenuItem>
                <MenuItem value='Campo4'>Industria manufacturera</MenuItem>
                <MenuItem value='Campo5'>Servicios al cliente</MenuItem>
                <MenuItem value='Campo6'>Administración y gestión</MenuItem>
              </Select>
              {comprensionTypeError && <Typography variant='body2' color='error'>{comprensionTypeError}</Typography>}
            </FormControl>
          </Grid>
        </Grid>  
        <br></br>
        <Divider sx={{ margin: 0 }} />
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
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
   
export default FormLayoutsCapIdioma