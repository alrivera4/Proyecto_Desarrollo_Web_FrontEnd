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
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const rows = [createData('¿Es usted migrante o exmigrante con una duración igual o mayor a dos años continuos?')];

const TableCollapsible4 = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell /> {/* Remove the TableCell for the checkbox */}
            <TableCell>Migrante</TableCell>
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

export default TableCollapsible4;
