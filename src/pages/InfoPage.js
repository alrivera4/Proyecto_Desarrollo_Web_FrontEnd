import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import Grid from '@mui/material/Grid';

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

const Personal = () => {
  return (
    <BoxWrapper>
      <ApexChartWrapper style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid item xs={12} md={6}>
            <CardNavigation />
          </Grid>
        </div>
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