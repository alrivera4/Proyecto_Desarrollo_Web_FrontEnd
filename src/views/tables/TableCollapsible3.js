import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';



const createData = (name, calories, fat, carbs, protein, price) => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
};

const Row = (props) => {
  const { row } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handlePercentageChange = (event) => {
    setPercentage(parseInt(event.target.value, 10));
  };
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            inputProps={{ 'aria-label': 'collapse row' }}
          />
        </TableCell>
        {/* Render both the name column and the checkbox content */}
        <TableCell component='th' scope='row'>
          {row.name}
          {/* Additional content */}
          <Collapse in={isChecked} timeout='auto' unmountOnExit>
    
          <Box sx={{ m: 2 }} >
          <Typography gutterBottom component='div'>
            Certificado
          </Typography>
          <Input type='file' onChange={handleFileChange} />
        </Box>


</Collapse>

        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const rows = [createData('¿Tiene usted alguna enferemada catastrófica ?')];



const TableCollapsible3 = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell /> {/* Remove the TableCell for the checkbox */}
            <TableCell>Enfermedad Catastrófica</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCollapsible3;