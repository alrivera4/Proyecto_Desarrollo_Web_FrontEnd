import { forwardRef, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import EyeOutline from 'mdi-material-ui/EyeOutline';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Fecha de Nacimiento' autoComplete='off' />;
});

const FormInfo = () => {
  const [language, setLanguage] = useState([]);
  const [date, setDate] = useState(null);

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false,
    paisNacimiento: '',
    sexo: '',
    estadoCivil: '',
  });

  const [documentoValido, setDocumentoValido] = useState(true);
  const [telefonoDomicilioValido, setTelefonoDomicilioValido] = useState(true);
  const [celularValido, setCelularValido] = useState(true);
  const [nombreValido, setNombreValido] = useState(true);
  const [apellidoValido, setApellidoValido] = useState(true);
  const [tipoDocumentoValido, setTipoDocumentoValido] = useState(true);
  const [paisNacimientoValido, setPaisNacimientoValido] = useState(true);
  const [sexoValido, setSexoValido] = useState(true);
  const [estadoCivilValido, setEstadoCivilValido] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validar campos de texto requeridos antes de enviar el formulario
    setNombreValido(values.nombre !== '');
    setApellidoValido(values.apellido !== '');
    setTipoDocumentoValido(values.tipoDocumento !== '');
    setPaisNacimientoValido(values.paisNacimiento !== '');
    setSexoValido(values.sexo !== '');
    setEstadoCivilValido(values.estadoCivil !== '');
    setDocumentoValido(validateDocumento(values.numeroDocumento));
    setTelefonoDomicilioValido(validateTelefono(values.telefonoDomicilio));
    setCelularValido(validateTelefono(values.celular));

    // Si todos los campos son válidos, continuar con el envío del formulario
    if (
      documentoValido &&
      telefonoDomicilioValido &&
      celularValido &&
      nombreValido &&
      apellidoValido &&
      tipoDocumentoValido &&
      paisNacimientoValido &&
      sexoValido &&
      estadoCivilValido
    ) {
      // Add form submission logic here
      // For simplicity, we will not add the form submission logic in this example.
    }
  };

  const handleSelectChange = (event) => {
    setLanguage(event.target.value);
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleConfirmChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const validateDocumento = (value) => {
    const regex = /^\d{10}$/;

return regex.test(value);
  };

  const validateTelefono = (value) => {
    const regex = /^\d+$/;

return regex.test(value);
  };

   // Función para validar que el nombre contenga solo letras
   const validateNombre = (value) => {
    const regex = /^[A-Za-z]+$/;

return regex.test(value);
  };

  // Función para validar que el apellido contenga solo letras
  const validateApellido = (value) => {
    const regex = /^[A-Za-z]+$/;

return regex.test(value);
  };

 const handleIdentificationImageUpload = event => {
    const file = event.target.files[0]
    setIdentificationImage(file)
  }



  const handleVotingCardImageUpload = event => {
    const file = event.target.files[0]
    setVotingCardImage(file)
  }

  return (
    <Card>
      <CardHeader title='Información Personal del Postulante' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleFormSubmit}>
        <CardContent>
          <Grid container spacing={5} alignItems='center'>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Información Personal
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth required error={!tipoDocumentoValido}>
                <InputLabel id='form-layouts-separator-select-label'>Tipo de Documento</InputLabel>
                <Select
                  label='Tipo de Documento'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  required
                  value={values.tipoDocumento}
                  onChange={(event) => setValues({ ...values, tipoDocumento: event.target.value })}
                >
                  <MenuItem value='Cedula'>Cédula</MenuItem>
                  <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='No. Documento'
                placeholder=''
                required
                inputProps={{
                  pattern: '[0-9]{10}',
                  title: 'Debe tener 10 dígitos numéricos',
                  onChange: (event) => setDocumentoValido(validateDocumento(event.target.value)),
                }}
                error={!documentoValido}
                helperText={!documentoValido && 'El número de documento debe tener 10 dígitos numéricos'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Denominación' placeholder='Leonard' required />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Nombre(s)'
                placeholder='Lucia'
                required
                inputProps={{
                  pattern: '[A-Za-z ]+',
                  title: 'Solo se permiten letras',
                  onChange: (event) => setNombreValido(validateNombre(event.target.value)),
                }}
                error={!nombreValido}
                helperText={!nombreValido && 'El nombre debe contener solo letras'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Apellidos(s)'
                placeholder='Salazar'
                required
                inputProps={{
                  pattern: '[A-Za-z ]+',
                  title: 'Solo se permiten letras',
                  onChange: (event) => setApellidoValido(validateApellido(event.target.value)),
                }}
                error={!apellidoValido}
                helperText={!apellidoValido && 'El apellido debe contener solo letras'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={(date) => setDate(date)}
                required
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth required error={!paisNacimientoValido}>
                <InputLabel id='form-layouts-separator-select-label'>País de Nacimiento</InputLabel>
                <Select
                  label='País de Nacimiento'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  required
                  value={values.paisNacimiento}
                  onChange={(event) => setValues({ ...values, paisNacimiento: event.target.value })}
                >
                  <MenuItem value='Afghanistan'>Afghanistan</MenuItem>
                  <MenuItem value='Argentina'>Argentina</MenuItem>
                  <MenuItem value='Brazil'>Brazil</MenuItem>
                  <MenuItem value='Canada'>Canada</MenuItem>
                  <MenuItem value='China'>China</MenuItem>
                  <MenuItem value='Ecuador'>Ecuador</MenuItem>
                  <MenuItem value='Egypt'>Egypt</MenuItem>
                  <MenuItem value='France'>France</MenuItem>
                  <MenuItem value='India'>India</MenuItem>
                  <MenuItem value='Italy'>Italy</MenuItem>
                  <MenuItem value='Saudi Arabia'>Saudi Arabia</MenuItem>
                  <MenuItem value='Spain'>Spain</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                  <MenuItem value='United Kingdom'>United Kingdom</MenuItem>
                  <MenuItem value='United States'>United States</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Email'
                placeholder='usuario@ejemplo.com'
                required
                type='email'
              />
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Información Adicional
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!sexoValido}>
                <InputLabel id='form-layouts-separator-select-label'>Sexo</InputLabel>
                <Select
                  label='Sexo'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  required
                  value={values.sexo}
                  onChange={(event) => setValues({ ...values, sexo: event.target.value })}
                >
                  <MenuItem value='Femenino'>Femenino</MenuItem>
                  <MenuItem value='Masculino'>Masculino</MenuItem>
                  <MenuItem value='Otro'>Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!estadoCivilValido}>
                <InputLabel id='form-layouts-separator-select-label'>Estado Civil</InputLabel>
                <Select
                  label='Estado Civil'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  required
                  value={values.estadoCivil}
                  onChange={(event) => setValues({ ...values, estadoCivil: event.target.value })}
                >
                  <MenuItem value='Soltero'>Soltero</MenuItem>
                  <MenuItem value='Casado'>Casado</MenuItem>
                  <MenuItem value='Divorciado'>Divorciado</MenuItem>
                  <MenuItem value='Viudo'>Viudo</MenuItem>
                  <MenuItem value='Unión Libre'>Unión Libre</MenuItem>
                  <MenuItem value='Separado'>Separado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Información del Domicilio
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Dirección' placeholder='Dirección' required />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} mt={5}>
                  <TextField
                    fullWidth
                    label='Teléfono del Domicilio'
                    placeholder='02 -2675698'
                    required
                    inputProps={{
                      pattern: '[0-9]+',
                      title: 'Solo se permiten dígitos numéricos',
                      onChange: (event) => setTelefonoDomicilioValido(validateTelefono(event.target.value)),
                    }}
                    error={!telefonoDomicilioValido}
                    helperText={!telefonoDomicilioValido && 'El teléfono debe contener solo dígitos numéricos'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} mt={5}>
                  <TextField
                    fullWidth
                    label='Celular'
                    placeholder='+593 997 765 299'
                    required
                    inputProps={{
                      pattern: '[0-9]+',
                      title: 'Solo se permiten dígitos numéricos',
                      onChange: (event) => setCelularValido(validateTelefono(event.target.value)),
                    }}
                    error={!celularValido}
                    helperText={!celularValido && 'El celular debe contener solo dígitos numéricos'}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

<Grid container spacing={5} mt={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                4. Información Profesional
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Perfil Profesional' placeholder='Perfil Profesional' />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} mt={8}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  5. Imagenes de Documentos
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} mt={5}>
                <input
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='identification-image-upload-button'
                  type='file'
                  onChange={handleIdentificationImageUpload}
                />
                <label htmlFor='identification-image-upload-button'>
                  <Button variant='contained' component='span'>
                    Subir Imagen Cédula
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={6} mt={5}>
                <input
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='voting-card-image-upload-button'
                  type='file'
                  onChange={handleVotingCardImageUpload}
                />
                <label htmlFor='voting-card-image-upload-button'>
                  <Button variant='contained' component='span'>
                    Subir Imagen Papeleta de Votación
                  </Button>
                </label>
              </Grid>
            </Grid>
          </Grid>

        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormInfo;
