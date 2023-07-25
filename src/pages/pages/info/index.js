// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'


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
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
           Información
          </Link>
        </Typography>
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
      </Grid>
    </Grid>
  )
}

export default Personal

