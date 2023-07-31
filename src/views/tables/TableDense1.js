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
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField'; // Importamos el componente TextField

const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
};

const opcionesArea = ['Finanzas', 'Humanidades', 'Salud', 'Ingeniería', 'Educación', 'Marketing'];
const opcionesSubarea = ['Fisioterapia', 'Ingeniería civil','Auditoría interna'];
const opcionesCampo = ['Agricultura', 'Turismo', 'Investigación', 'Administración'];

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
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
                            <TableCell align='center' style={{ textAlign: 'center' }}>Cod. Senecyt</TableCell>
                            <TableCell align='center' style={{ textAlign: 'center' }}>Área</TableCell>
                            <TableCell align='center' style={{ textAlign: 'center' }}>Subárea</TableCell>
                            <TableCell align='center' style={{ textAlign: 'center' }}>Campo</TableCell>
                            <TableCell align='center' style={{ textAlign: 'center' }}>Subir Archivos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row' style={{ textAlign: 'left' }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>
                                    <TextField
                                        select
                                        variant="outlined"
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="">Seleccione</option>
                                        {opcionesArea.map((opcion) => (
                                            <option key={opcion} value={opcion}>{opcion}</option>
                                        ))}
                                    </TextField>
                                </TableCell>
                                <TableCell align='right'>
                                    <TextField
                                        select
                                        variant="outlined"
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="">Seleccione</option>
                                        {opcionesSubarea.map((opcion) => (
                                            <option key={opcion} value={opcion}>{opcion}</option>
                                        ))}
                                    </TextField>
                                </TableCell>
                                <TableCell align='right'>
                                    <TextField
                                        select
                                        variant="outlined"
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="">Seleccione</option>
                                        {opcionesCampo.map((opcion) => (
                                            <option key={opcion} value={opcion}>{opcion}</option>
                                        ))}
                                    </TextField>
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



