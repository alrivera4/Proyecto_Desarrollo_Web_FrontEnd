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


// ** Third Party Imports
import MessageOutline from 'mdi-material-ui/MessageOutline'

const FormLayoutsAcademia = () => {
  // ** States
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(''); // Add the state for title
  const [titleError, setTitleError] = useState('');
  const [institution, setInstitution] = useState(''); // Add the state for institution
  const [institutionError, setInstitutionError] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [descripcionError, setDescripcionError] = useState('');
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Handle File Upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const [selectedValues, setSelectedValues] = useState({
    areaEstudio: '',
    nivelEstudio: '',
    estadoEstudio: '',
  });

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z\s]*$/;

    if (!regex.test(title)) {
      setTitleError('Title should only contain letters and spaces');
    } else {
      setTitleError('');
    }

    if (!regex.test(institution)) {
      setInstitutionError('Institution should only contain letters and spaces');
    } else {
      setInstitutionError('');
    }

    if (!regex.test(descripcion)) {
      setDescripcionError('Description should only contain letters and spaces');
    } else {
      setDescripcionError('');
    }

    // Open the confirmation modal
    setIsConfirmationModalOpen(true);
  };


  // Maneja la confirmación del modal de confirmación
  const handleConfirmModal = () => {
    // Perform the form submission logic here
    console.log('Formulario enviado exitosamente');

    // Clear the form data after successful submission
    setTitle('');
    setInstitution('');
    setFile(null);
    setSelectedYear('');
    setDescripcion('');

    setSelectedValues({
      areaEstudio: '',
      nivelEstudio: '',
      estadoEstudio: '',
    });

    // Cierra el modal de confirmación
    setIsConfirmationModalOpen(false);
  };

  // Maneja la cancelación del modal de confirmación
  const handleCancelModal = () => {
    // Cierra el modal de confirmación sin borrar los datos del formulario
    setIsConfirmationModalOpen(false);
  };

  const startYear = 1980;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);


  return (
    <Card>
      <CardHeader title='Información Personal del Postulante' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Título</Typography>
            <TextField
              fullWidth
              placeholder=''
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={!!titleError}
              helperText={titleError}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Institución</Typography>
            <TextField
              fullWidth
              placeholder=''
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              error={!!institutionError}
              helperText={institutionError}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Areá de Estudio</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
                label='Country'
                placeholder='Bio...'
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Ajusta esta altura según tus necesidades
                    },
                  }
                }}
                value={selectedValues.areaEstudio}
                onChange={(e) =>
                  setSelectedValues({
                    ...selectedValues,
                    areaEstudio: e.target.value,
                  })
                }
              >
                <MenuItem value='CS'>Ciencias Sociales</MenuItem>
                <MenuItem value='CN'>Ciencias Naturales</MenuItem>
                <MenuItem value='HU'>Humanidades</MenuItem>
                <MenuItem value='CSalud'>Ciencias de la Salud</MenuItem>
                <MenuItem value='IT'>Ingeniría y Tecnología</MenuItem>
                <MenuItem value='Artes'>Artes y Bellas Artes</MenuItem>
                <MenuItem value='CTierra'>Ciencias de la Tierra y Medio Ambiente</MenuItem>
                <MenuItem value='Bio'>Biotecnología y Genética</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Nivel de Estudio</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
                label='Country'
                placeholder='Bio...'
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Ajusta esta altura según tus necesidades
                    },
                  }
                }}
                value={selectedValues.nivelEstudio}
                onChange={(e) =>
                  setSelectedValues({
                    ...selectedValues,
                    nivelEstudio: e.target.value,
                  })
                }
              >
                <MenuItem value='Pre'>Pregrado</MenuItem>
                <MenuItem value='Pos'>Posgrado</MenuItem>
                <MenuItem value='Lic'>Licenciatura</MenuItem>
                <MenuItem value='Tec'>Tecnología</MenuItem>
                <MenuItem value='Doc'>Doctorado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Estado de Estudio</Typography>
              <InputLabel id='form-layouts-separator-select-label-2'></InputLabel>
              <Select
                label='Country 2'
                defaultValue=''
                id='form-layouts-separator-select-2'
                labelId='form-layouts-separator-select-label-2'
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200, // Ajusta esta altura según tus necesidades
                    },
                  }
                }}
                value={selectedValues.estadoEstudio}
                onChange={(e) =>
                  setSelectedValues({
                    ...selectedValues,
                    estadoEstudio: e.target.value,
                  })
                }
              >
                <MenuItem value='Parcial'>Estudiante de Tiempo Parcial</MenuItem>
                <MenuItem value='Graduado'>Graduado</MenuItem>
                <MenuItem value='Practicas'>Estudiante de Prácticas</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>Año de Inicio</Typography>
              <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
              <Select
                labelId='form-layouts-separator-select-label'
                label='Año de Inicio'
                value={selectedYear}
                onChange={handleYearChange}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
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
          {file && (
            <Typography variant="body2" sx={{ overflowWrap: 'break-word' }}>
              {file.name}
            </Typography>
          )}
        </Grid>
        <Divider sx={{ margin: 0 }} />
        <br></br>
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
  )
}

export default FormLayoutsAcademia