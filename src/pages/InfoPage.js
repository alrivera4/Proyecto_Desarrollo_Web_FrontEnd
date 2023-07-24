import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout';


// ** Demo Imports
import CardNavigation from 'src/views/cards/CardNavigation';


// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
  height: '100vh', // Ocupar toda la altura disponible
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const FullHeightCard = styled(CardNavigation)(({ theme }) => ({
  width: '100%', // Ocupar todo el ancho disponible
  height: '100%', // Ocupar todo el largo disponible
}));

const Personal = () => {
  return (
    <BoxWrapper>
      <ApexChartWrapper style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box style={{ width: '100%', height: '100%' }}>
          <FullHeightCard />
        </Box>
      </ApexChartWrapper>
      <Link passHref href='/'>
        <Button component='a' variant='contained' sx={{ px: 5.5 }}>
          Back to Home
        </Button>
      </Link>
    </BoxWrapper>
  );
};

Personal.getLayout = page => <BlankLayout>{page}</BlankLayout>;

export default Personal;

