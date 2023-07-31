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


const FormLayoutsPubArticulos = () => {
  // ** States
  const [file, setFile] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [tituloError, setTituloError] = useState('');
  const [datosType, setDatosType] = useState('');
  const [datosTypeError, setDatosTypeError] = useState('');
  const [impactoType, setImpactoType] = useState('');
  const [impactoTypeError, setImpactoTypeError] = useState('');
  const [areaType, setAreaType] = useState('');
  const [areaTypeError, setAreaTypeError] = useState('');
  const [subareaType, setSubareaType] = useState('');
  const [subareaTypeError, setSubareaTypeError] = useState('');
  const [campoType, setCampoType] = useState('');
  const [campoTypeError, setCampoTypeError] = useState('');
  const [publicacionStart, setPublicacionStart] = useState('');
  const [publicacionStartError, setPublicacionStartError] = useState('');
  const [indice, setIndice] = useState('');
  const [indiceError, setIndiceError] = useState('');
  const [doi, setDoi] = useState('');
  const [doiError, setDoiError] = useState('');
  const [issn, setIssn] = useState('');
  const [issnError, setIssnError] = useState('');
  const [paginas, setPaginas] = useState('');
  const [paginasError, setPaginasError] = useState('');
  const [volumen, setVolumen] = useState('');
  const [volumenError, setVolumenError] = useState('');
  const [numero, setNumero] = useState('');
  const [numeroError, setNumeroError] = useState('');

  const isValidNumber = (value) => /^\d+$/.test(value);

  const isLettersAndSpacesOnly = (value) => /^[a-zA-Z\s]*$/.test(value);

  const isValidDOI = (value) => /^[a-zA-Z0-9]+$/.test(value);


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
  
      // Validate "Titulo"
      if (!isLettersAndSpacesOnly(titulo)) {
        setTituloError('Título should only contain letters and spaces');
        formIsValid = false;
      } else {
        setTituloError('');
      }
  
      // Validate "Base de Datos"
      if (!datosType) {
        setDatosTypeError('Please select a Base de Datos');
        formIsValid = false;
      } else {
        setDatosTypeError('');
      }

      // Validate "Impacto"
      if (!impactoType) {
        setImpactoTypeError('Please select a Tipo de Impacto');
        formIsValid = false;
      } else {
        setImpactoTypeError('');
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

      // Validate "Índice SJR"
      if (!isLettersAndSpacesOnly(indice)) {
        setIndiceError('Índice should only contain letters and spaces');
        formIsValid = false;
      } else {
        setIndiceError('');
      }
  
      // Validate "DOI"
      if (!isValidNumber(doi)) {
        setDoiError('DOI should only contain numbers');
        formIsValid = false;
      } else {
        setDoiError('');
      }

      // Validate "Índice ISSN"
      if (!isLettersAndSpacesOnly(issn)) {
        setIssnError('Índice ISSN should only contain letters and spaces');
        formIsValid = false;
      } else {
        setIssnError('');
      }

       // Validate "Páginas"
       if (!isValidNumber(paginas)) {
        setPaginasError('Páginas should only contain numbers');
        formIsValid = false;
      } else {
        setPaginasError('');
      }

       // Validate "Volúmen"
       if (!isValidNumber(volumen)) {
        setVolumenError('Volúmen should only contain numbers');
        formIsValid = false;
      } else {
        setVolumenError('');
      }

       // Validate "Número"
       if (!isValidNumber(numero)) {
        setNumeroError('Número should only contain numbers');
        formIsValid = false;
      } else {
        setNumeroError('');
      }

      
      if (formIsValid) {
        // Perform the form submission logic here
        console.log('Form submitted successfully');


        // Clear the form data after successful submission
        setTitulo('');
        setDatosType('');
        setImpactoType('');
        setFile(null);
        setAreaType('');
        setSubareaType('');
        setCampoType('');
        setPublicacionStart('');
        setIndice('');
        setDoi('');
        setIssn('');
        setPaginas('');
        setVolumen('');
        setNumero('');

      }
    };

  return (
    <Card>
    <CardHeader title='Artículos Científicos' titleTypographyProps={{ variant: 'h6' }} />
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
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Base de Datos</Typography>
          <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
            <Select
            labelId='base-de-datos-type-label'
            label='Base de Datos'
            value={datosType}
            onChange={(e) => setDatosType(e.target.value)}
            error={!!datosTypeError}
            >
              <MenuItem value='Base1'>PubMed</MenuItem>
              <MenuItem value='Base2'>Scopus</MenuItem>
              <MenuItem value='Base3'>Web of Science</MenuItem>
              <MenuItem value='Base4'>IEEE Xplore</MenuItem>
              <MenuItem value='Base5'>Google Scholar</MenuItem>
            </Select>
            {datosTypeError && <Typography variant='body2' color='error'>{datosTypeError}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Impacto</Typography>
          <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
            <Select
            labelId='impacto-type-label'
            label='Impacto'
            value={impactoType}
            onChange={(e) => setImpactoType(e.target.value)}
            error={!!impactoTypeError}
            >
              <MenuItem value='Cap1'>Técnica o Profesional</MenuItem>
              <MenuItem value='Cap2'>Gerencial y Liderazgo</MenuItem>
              <MenuItem value='Cap3'>Ventas y Servicio al Cliente</MenuItem>
              <MenuItem value='Cap4'>Seguridad Laboral</MenuItem>
              <MenuItem value='Cap5'>Trabajo en Equipo</MenuItem>
            </Select>
            {impactoTypeError && <Typography variant='body2' color='error'>{impactoTypeError}</Typography>}
          </FormControl>
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
            >
              <MenuItem value='Impacto1'>Citaciones</MenuItem>
              <MenuItem value='Impacto2'>Factor de impacto de la revista</MenuItem>
              <MenuItem value='Impacto3'>Índice h (h-index)</MenuItem>
              <MenuItem value='Impacto4'>Altmetrics</MenuItem>
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
            >
              <MenuItem value='Campo1'>Agricultura y agroindustria</MenuItem>
              <MenuItem value='Campo2'>Turismo y hotelería</MenuItem>
              <MenuItem value='Campo3'>Investigación y desarrollo</MenuItem>
              <MenuItem value='Campo4'>Industria manufacturera</MenuItem>
              <MenuItem value='Campo5'>Servicios al cliente</MenuItem>
              <MenuItem value='Campo6'>Administración y Gestión</MenuItem>
            </Select>
            {campoTypeError && <Typography variant='body2' color='error'>{campoTypeError}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Fecha de Publicación</Typography>
            <InputLabel id='form-layouts-separator-select-label-2'></InputLabel>
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
        <Typography variant='body2' sx={{ fontWeight: 600 }}>Índice SJR</Typography>
            <TextField
             fullWidth 
             placeholder='' 
             value={indice}
             onChange={(e) => setIndice(e.target.value)}
             error={!!indiceError}
             helperText={indiceError}
             required
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>DOI</Typography>
            <TextField
              fullWidth 
              placeholder='' 
              value={doi}
              onChange={(e) => setDoi(e.target.value)}
              error={!!doiError}
              helperText={doiError}
              required
              inputProps={{
                maxLength: 50,
                pattern: '[a-zA-Z0-9]*',
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>Páginas</Typography>
            <TextField
              fullWidth 
              placeholder='' 
              value={paginas}
              onChange={(e) => setPaginas(e.target.value)}
              error={!!paginasError}
              helperText={paginasError}
              required
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>Volúmen</Typography>
            <TextField
              fullWidth 
              placeholder='' 
              value={volumen}
              onChange={(e) => setVolumen(e.target.value)}
              error={!!volumenError}
              helperText={volumenError}
              required
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>Número</Typography>
            <TextField
              fullWidth 
              placeholder='' 
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              error={!!numeroError}
              helperText={numeroError}
              required
            />
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
  )
}

export default FormLayoutsPubArticulos