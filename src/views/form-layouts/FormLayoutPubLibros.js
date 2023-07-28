// ** React Imports
import { useState } from 'react'

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
import Select from '@mui/material/Select'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const FormLayoutsPubLibros = () => {
  // ** States
  const [file, setFile] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [tituloError, setTituloError] = useState('');
  const [areaType, setAreaType] = useState('');
  const [areaTypeError, setAreaTypeError] = useState('');
  const [subareaType, setSubareaType] = useState('');
  const [subareaTypeError, setSubareaTypeError] = useState('');
  const [campoType, setCampoType] = useState('');
  const [campoTypeError, setCampoTypeError] = useState('');
  const [publicacionStart, setPublicacionStart] = useState('');
  const [publicacionStartError, setPublicacionStartError] = useState('');
  const [issn, setIssn] = useState('');
  const [issnError, setIssnError] = useState('');

  // Handle File Upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const isValidNumber = (value) => /^\d+$/.test(value);

  const isLettersAndSpacesOnly = (value) => /^[a-zA-Z\s]*$/.test(value);

  const isValidDOI = (value) => /^[a-zA-Z0-9]+$/.test(value);


  const isValidDate = (value) => {
    return !isNaN(Date.parse(value));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
  
      // Validate "Titulo"
      if (!isLettersAndSpacesOnly(titulo)) {
        setTituloError('Título should only contain letters and spaces');
        formIsValid = false;
      } else {
        setTituloError('');
      }

      // Validate "Area"
      if (!areaType) {
        setAreaTypeError('Please select a Tipo de Área');
        formIsValid = false;
      } else {
        setAreaTypeError('');
      }
  
      // Validate "Subarea"
      if (!subareaType) {
        setSubareaTypeError('Please select a Tipo de Subárea');
        formIsValid = false;
      } else {
        setSubareaTypeError('');
      }

      // Validate "Campo"
      if (!campoType) {
        setCampoTypeError('Please select a Tipo de Campo');
        formIsValid = false;
      } else {
        setCampoTypeError('');
      }
  
      // Validate "Fecha de Publicación" date format
      if (!publicacionStart) {
        setPublicacionStartError('Please enter the date');
        formIsValid = false;
      } else if (!isValidDate(publicacionStart)) {
        setPublicacionStartError('Please enter a valid date (YYYY-MM-DD)');
        formIsValid = false;
      } else {
        setPublicacionStartError('');
      }

      // Validate "Índice ISSN"
      if (!isLettersAndSpacesOnly(issn)) {
        setIssnError('Índice ISSN should only contain letters and spaces');
        formIsValid = false;
      } else {
        setIssnError('');
      }
    
    // Perform the form submission logic here
    console.log('Form submitted successfully');

    // Clear the form data after successful submission
    setTitulo('');
    setAreaType('');
    setSubareaType('');
    setCampoType('');
    setPublicacionStart('');
    setIssn('');
    setFile(null);
  };

  return (
    <Card>
      <CardHeader title='Libros' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Título</Typography>
            <TextField 
              fullWidth 
              placeholder=''
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              error={!!tituloError}
              helperText={tituloError}
              required   
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Área</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='area-type-label'
                label='Área'
                value={areaType}
                onChange={(e) => setAreaType(e.target.value)}
                error={!!areaTypeError}
                required
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
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Subárea</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='subarea-type-label'
                label='Subárea'
                value={subareaType}
                onChange={(e) => setSubareaType(e.target.value)}
                error={!!subareaTypeError}
                required
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
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Campo</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='campo-type-label'
                label='Campo'
                value={campoType}
                onChange={(e) => setCampoType(e.target.value)}
                error={!!campoTypeError}
                required
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
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Fecha de Publicación</Typography>
              <TextField
                fullWidth
                type='date'
                value={publicacionStart}
                onChange={(e) => setPublicacionStart(e.target.value)}
                error={!!publicacionStartError}
                helperText={publicacionStartError}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>ISSN</Typography>
              <TextField
                fullWidth 
                placeholder='' 
                value={issn}
                onChange={(e) => setIssn(e.target.value)}
                error={!!issnError}
                helperText={issnError}
                required
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
        <br></br>
        <Divider sx={{ margin: 0 }} />
        <br></br>
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}


export default FormLayoutsPubLibros