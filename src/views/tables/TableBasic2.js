import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Magnify from 'mdi-material-ui/Magnify';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';


const createData = (name, calories, fat, carbs, protein, a, b) => {
  return { name, calories, fat, carbs, protein, a, b };
};

const rows = [
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2, <Magnify sx={{ color: '#1da1f2' }} />),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1, <Magnify sx={{ color: '#1da1f2' }} />),
  createData('Eclair', 262, 16.0, 24, 6.0, 4, <Magnify sx={{ color: '#1da1f2' }} />),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'HOLA', <Magnify sx={{ color: '#1da1f2' }} />),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'AA', <Magnify sx={{ color: '#1da1f2' }} />),
];

const TableBasic = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
    setModalOpen(false);
  };

  const handleAccept = () => {
    // Aquí puedes realizar alguna acción al hacer clic en el botón de aceptar
    handleCloseModal();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {/* Campo de búsqueda */}
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Buscar por Facultad"
        style={{ width: '300px', marginRight: '20px' }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>CODIGO</TableCell>
              <TableCell align='right'>FACULTAD</TableCell>
              <TableCell align='right'>TIEMPO DE DICACION</TableCell>
              <TableCell align='right'>CAMPO DE CONOCIMIENTO</TableCell>
              <TableCell align='right'>TITULO DE TERCER NIVEL</TableCell>
              <TableCell align='right'>TITULO DE CUARTO NIVEL</TableCell>
              <TableCell align='right'>MAS   </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter(row => row.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map(row => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-of-type td, &:last-of-type th': {
                      border: 0,
                      cursor: 'pointer', // Cambiamos el cursor a pointer para indicar que es clickeable
                    }
                  }}
                  onClick={() => handleRowClick(row)} // Llamamos a la función handleRowClick al hacer clic en la fila
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                  <TableCell align='right'>{row.a}</TableCell>
                  <TableCell align='right'>{row.b}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pantalla emergente */}
      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogContent sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         
          {selectedRow && (
            <div>
              <h2 >INSTRUCCIONES</h2>
              <p>Cada postulante podrá aplicar exclusivamente a un puesto por convocatoria.</p>
              <p>Una vez que aplique a un puesto la o el postulante no podrá modificar el regitro "" para el puesto postulado.</p>
              <p>No se admitirán postulaciones (solicitud y documentos de respaldo) con manchas, tachones o cualquier otro tipo de alteraciones, que no permita la lectura comprensible o ponga en duda el contenido.
</p>
              <p>No se admitirá postulaciones fuera del calendario y horario establecido quedando automáticamente descartados 
</p>
              <p>Recuerde:</p>
              <p>El regitro de información en la sección Hoja de vida es obligatoria según corresponda.</p>
              <Button onClick={handleAccept} variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
                Regresar
              </Button>
              <Button onClick={handleCloseModal} variant="contained" color="secondary" sx={{ marginTop: '1rem' }}>
                Cerrar
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TableBasic;
