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
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const isLettersAndSpacesOnly = (value) => /^[a-zA-Z\s]*$/.test(value);

  // Handle File Upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show confirmation dialog to the user
    setIsConfirmationModalOpen(true);
  };

  // Maneja la confirmación del modal de confirmación
  const handleConfirmModal = () => {
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
      // Perform the form submission logic here
      console.log('Formulario enviado exitosamente');

      // Clear the form data after successful submission
      setCertificacion('');
      setFile(null);
      setIdiomaType('');
      setEscritoType('');
      setOralType('');
      setComprensionType('');

      // Cierra el modal de confirmación
      setIsConfirmationModalOpen(false);
    }
  };

  // Maneja la cancelación del modal de confirmación
  const handleCancelModal = () => {
    // Cierra el modal de confirmación sin borrar los datos del formulario
    setIsConfirmationModalOpen(false);
  };

  return (
    <Card>
      <CardHeader title='Idiomas' titleTypographyProps={{ variant: 'h6' }} />
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
                <MenuItem value='Idioma1'>Inglés</MenuItem>
                <MenuItem value='Idioma2'>Francés</MenuItem>
                <MenuItem value='Idioma3'>Chino Mandarín</MenuItem>
                <MenuItem value='Idioma'>Portugués</MenuItem>
                <MenuItem value='Idioma5'>Ruso</MenuItem>
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
                <MenuItem value='escrito1'>Alto</MenuItem>
                <MenuItem value='escrito2'>Medio</MenuItem>
                <MenuItem value='escrito3'>Bajo</MenuItem>
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
                <MenuItem value='oral1'>Alto</MenuItem>
                <MenuItem value='oral2'>Medio</MenuItem>
                <MenuItem value='oral3'>Bajo</MenuItem>
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
                <MenuItem value='Comp1'>Alto</MenuItem>
                <MenuItem value='Comp2'>Medio</MenuItem>
                <MenuItem value='Comp3'>Bajo</MenuItem>
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
      {/* Modal de confirmación */}
      {isConfirmationModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card style={{ padding: 20, maxWidth: 400 }}>
            <Typography variant='h6' style={{ marginBottom: 20 }}>
              Confirmar Envío
            </Typography>
            <Typography variant='body2'>
              ¿Está seguro de guardar los datos del formulario y borrarlos?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleConfirmModal}
                style={{ marginLeft: 10 }}
              >
                Sí, Enviar
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={handleCancelModal}
                style={{ marginLeft: 10 }}
              >
                Cancelar
              </Button>
            </div>
          </Card>
        </div>
      )}
    </Card>
  );
};

export default FormLayoutsCapIdioma