import { useState, Fragment } from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'



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
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handlePercentageChange = (event) => {
    setPercentage(parseInt(event.target.value, 10));
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
        {/* Only render the name column */}
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={1} sx={{ py: '0 !important' }}>
          <Collapse in={isChecked} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
            
              <FormLabel item xs={6} sx={{ fontSize: '0.875rem' }}>Estado Civil</FormLabel>
              <Select label='Country'>
                <MenuItem value='USA'>Soltero</MenuItem>
                <MenuItem value='UK'>Casado</MenuItem>
                <MenuItem value='Australia'>Divorciado</MenuItem>
                <MenuItem value='Germany'>Union Libre</MenuItem>
              </Select>
           

              <Typography variant='h6' gutterBottom component='div'>
                Porcentaje
              </Typography>
              <input
                type='range'
                value={percentage}
                onChange={handlePercentageChange}
                min={30}
                max={100}
              />
             
              <span>{`${percentage}%`}</span>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const rows = [createData('¿Tiene usted alguna discapacidad mayor al 30%?')];

const TableCollapsible= () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell /> {/* Remove the TableCell for the checkbox */}
            <TableCell>Discapacidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCollapsible;
