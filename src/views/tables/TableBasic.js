import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Twitter from 'mdi-material-ui/Twitter';

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const TableBasic = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {/* Campo de búsqueda */}
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Buscar por Facultad"
        style={{ width: '300px', marginRight: '20px' }} // Estilos para ajustar la barra de búsqueda
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
              <TableCell align='right'>TITULO DE CUARTO NIVEL <Twitter sx={{ color: '#1da1f2' }} />   </TableCell>
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
                      border: 0
                    }
                  }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableBasic;
