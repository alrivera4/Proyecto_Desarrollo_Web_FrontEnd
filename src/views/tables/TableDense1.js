import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { MenuItem } from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

const optionsAreas = [
  { value: 'area1', label: 'Área 1' },
  { value: 'area2', label: 'Área 2' },
];

const optionsSubareas = [
  { value: 'subarea1', label: 'Subárea 1' },
  { value: 'subarea2', label: 'Subárea 2' },
];

const optionsCampos = [
  { value: 'campo1', label: 'Campo 1' },
  { value: 'campo2', label: 'Campo 2' },
];

const TableDense1 = () => {
  const handleFileChange = (event) => {
    // Lógica para manejar el cambio de archivo
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  };

  const handleSincronizarTitulos = () => {
    // Aquí va la lógica para sincronizar títulos con Senescyt
    // Por ejemplo, puedes hacer una llamada a una API para obtener los títulos registrados
    console.log('Sincronizando títulos con Senescyt...');
  };

  const [selectedAreas, setSelectedAreas] = useState({});
  const [selectedSubareas, setSelectedSubareas] = useState({});
  const [selectedCampos, setSelectedCampos] = useState({});

  const handleAreaChange = (event, row) => {
    setSelectedAreas((prevState) => ({ ...prevState, [row.name]: event.target.value }));
  };

  const handleSubareaChange = (event, row) => {
    setSelectedSubareas((prevState) => ({ ...prevState, [row.name]: event.target.value }));
  };

  const handleCampoChange = (event, row) => {
    setSelectedCampos((prevState) => ({ ...prevState, [row.name]: event.target.value }));
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px' }}>
        <Typography variant='h6' component='div'>
          Títulos Académicos Registrados en la Senecyt
        </Typography>
        <Button variant="contained" onClick={handleSincronizarTitulos} >Sincronizar Títulos</Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} size='' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Cod. Senecyt</TableCell>
              <TableCell align='right'>Área</TableCell>
              <TableCell align='right'>Subárea</TableCell>
              <TableCell align='right'>Campo</TableCell>
              <TableCell align='right'>Subir Archivo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>
                  <Select
                    value={selectedAreas[row.name] || ''}
                    onChange={(e) => handleAreaChange(e, row)}
                    style={{ width: 150 }}
                  >
                    <MenuItem value=''>Seleccione una opción</MenuItem>
                    {optionsAreas.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell align='right'>
                  <Select
                    value={selectedSubareas[row.name] || ''}
                    onChange={(e) => handleSubareaChange(e, row)}
                    style={{ width: 150 }}
                  >
                    <MenuItem value=''>Seleccione una opción</MenuItem>
                    {optionsSubareas.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell align='right'>
                  <Select
                    value={selectedCampos[row.name] || ''}
                    onChange={(e) => handleCampoChange(e, row)}
                    style={{ width: 150 }}
                  >
                    <MenuItem value=''>Seleccione una opción</MenuItem>
                    {optionsCampos.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell align='right'>
                  <Grid container spacing={0} direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item>
                      <input
                        accept=".pdf"
                        id="document-upload"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="document-upload">
                        <IconButton
                          aria-label="upload"
                          component="span"
                        >
                          <CloudUploadIcon />
                        </IconButton>
                      </label>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDense1;
