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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import FormLayoutsPubLibros from '../form-layouts/FormLayoutPubLibros';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableDense6 = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px' }}>
        <Typography variant='h6' component='div'>
          Libros
        </Typography>
        <Button variant="contained" onClick={abrirModal}>Nuevo</Button>
      </div>
      {/* Ventana Modal */}
      <Dialog open={mostrarModal} onClose={cerrarModal}>
        <DialogTitle>
          Formulario
          <IconButton aria-label="close" onClick={cerrarModal} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormLayoutsPubLibros />
        </DialogContent>
      </Dialog>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} size='' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell align='right'>ISBN</TableCell>
              <TableCell align='right'>Fecha de Publicación</TableCell>
              <TableCell align='right'>Certificado</TableCell>
              <TableCell align='right'>Editar</TableCell>
              <TableCell align='right'>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'>
                <Grid container spacing={0} direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item>
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align='right'>
                  <Grid container spacing={0} direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
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

export default TableDense6;
