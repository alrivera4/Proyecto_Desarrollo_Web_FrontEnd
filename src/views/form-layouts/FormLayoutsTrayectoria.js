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


const FormLayoutsTrayectoria = () => {
  // ** States
  const [file, setFile] = useState(null);
  const [institution, setInstitution] = useState('');
  const [institutionError, setInstitutionError] = useState('');
  const [department, setDepartment] = useState('');
  const [departmentError, setDepartmentError] = useState('');
  const [position, setPosition] = useState('');
  const [positionError, setPositionError] = useState('');
  const [contractType, setContractType] = useState('');
  const [contractTypeError, setContractTypeError] = useState('');
  const [institutionType, setInstitutionType] = useState('');
  const [institutionTypeError, setInstitutionTypeError] = useState('');
  const [experienceType, setExperienceType] = useState('');
  const [experienceTypeError, setExperienceTypeError] = useState('');
  const [contractStart, setContractStart] = useState('');
  const [contractStartError, setContractStartError] = useState('');
  const [contractEnd, setContractEnd] = useState('');
  const [contractEndError, setContractEndError] = useState('');


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
  
      // Validate "Institución"
      if (!isLettersAndSpacesOnly(institution)) {
        setInstitutionError('Institution should only contain letters and spaces');
        formIsValid = false;
      } else {
        setInstitutionError('');
      }
  
      // Validate "Departamento"
      if (!isLettersAndSpacesOnly(department)) {
        setDepartmentError('Departamento should only contain letters and spaces');
        formIsValid = false;
      } else {
        setDepartmentError('');
      }
  
      // Validate "Cargo"
      if (!isLettersAndSpacesOnly(position)) {
        setPositionError('Cargo should only contain letters and spaces');
        formIsValid = false;
      } else {
        setPositionError('');
      }
  
      // Validate "Tipo de Contrato"
      if (!contractType) {
        // Assuming that the initial value of contractType is an empty string
        // Change this if the initial value is different
        setContractTypeError('Please select a Tipo de Contrato');
        formIsValid = false;
      } else {
        setContractTypeError('');
      }
  
      // Validate "Tipo de Institución"
      if (!institutionType) {
        // Assuming that the initial value of institutionType is an empty string
        // Change this if the initial value is different
        setInstitutionTypeError('Please select a Tipo de Institución');
        formIsValid = false;
      } else {
        setInstitutionTypeError('');
      }
  
      // Validate "Tipo de Experiencia"
      if (!experienceType) {
        // Assuming that the initial value of experienceType is an empty string
        // Change this if the initial value is different
        setExperienceTypeError('Please select a Tipo de Experiencia');
        formIsValid = false;
      } else {
        setExperienceTypeError('');
      }
  
      // Validate "Inicio Contrato" date format
      if (!contractStart) {
        setContractStartError('Please enter the start date');
        formIsValid = false;
      } else if (!isValidDate(contractStart)) {
        setContractStartError('Please enter a valid date (YYYY-MM-DD)');
        formIsValid = false;
      } else {
        setContractStartError('');
      }

  
      // Validate "Fin Contrato" date format
      if (!contractEnd) {
        setContractEndError('Please enter the end date');
        formIsValid = false;
      } else if (!isValidDate(contractEnd)) {
        setContractEndError('Please enter a valid date (YYYY-MM-DD)');
        formIsValid = false;
      } else {
        setContractEndError('');
      }
  
      // Continue with form submission if all fields are valid
      if (formIsValid && contractStart > contractEnd) {
        setContractEndError('The end date should be after the start date');
        formIsValid = false;
      }

      if (formIsValid) {
        // Perform the form submission logic here
        console.log('Form submitted successfully');


        // Clear the form data after successful submission
        setInstitution('');
        setDepartment('');
        setPosition('');
        setFile(null);
        setContractType('');
        setInstitutionType('');
        setExperienceType('');
        setContractStart('');
        setContractEnd('');
      }
    };

  return (
    <Card>
    <CardHeader title='Experiencia Profesional' titleTypographyProps={{ variant: 'h6' }} />
    <Divider sx={{ margin: 0 }} />
    <form onSubmit={handleSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
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
        <Typography variant='body2' sx={{ fontWeight: 600 }}>Departamento</Typography>
            <TextField
             fullWidth 
             placeholder='' 
             value={department}
             onChange={(e) => setDepartment(e.target.value)}
             error={!!departmentError}
             helperText={departmentError}
             required
            />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>Cargo</Typography>
            <TextField
              fullWidth 
              placeholder='' 
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              error={!!positionError}
              helperText={positionError}
              required
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Tipo de Contrato</Typography>
          <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
            <Select
            labelId='contract-type-label'
            label='Tipo de Contrato'
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
            error={!!contractTypeError}
            >
              <MenuItem value='Contrato1'>Contrato 1</MenuItem>
              <MenuItem value='Contrato2'>Contrato 2</MenuItem>
            </Select>
            {contractTypeError && <Typography variant='body2' color='error'>{contractTypeError}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Tipo de Institución</Typography>
          <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
            <Select
            labelId='contract-type-label'
            label='Tipo de Contrato'
            value={institutionType}
            onChange={(e) => setInstitutionType(e.target.value)}
            error={!!institutionTypeError}
            >
              <MenuItem value='Contrato1'>Contrato 1</MenuItem>
              <MenuItem value='Contrato2'>Contrato 2</MenuItem>
            </Select>
            {institutionTypeError && <Typography variant='body2' color='error'>{institutionTypeError}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Tipo de Experiencia</Typography>
          <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
            <Select
              labelId='experience-type-label'
              label='Tipo de Experiencia'
              value={experienceType}
              onChange={(e) => setExperienceType(e.target.value)}
              error={!!experienceTypeError}
            >
              <MenuItem value='Experiencia1'>Experiencia 1</MenuItem>
              <MenuItem value='Experiencia2'>Experiencia 2</MenuItem>
            </Select>
            {experienceTypeError && <Typography variant='body2' color='error'>{experienceTypeError}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Inicio Contrato</Typography>
            <InputLabel id='form-layouts-separator-select-label-2'></InputLabel>
            <TextField
              fullWidth
              type='date'
              value={contractStart}
              onChange={(e) => setContractStart(e.target.value)}
              error={!!contractStartError}
              helperText={contractStartError}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>Fin Contrato</Typography>
          <InputLabel id='form-layouts-separator-multiple-select-label-2'></InputLabel>
          <TextField
              fullWidth
              type='date'
              value={contractEnd}
              onChange={(e) => setContractEnd(e.target.value)}
              error={!!contractEndError}
              helperText={contractEndError}
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

export default FormLayoutsTrayectoria