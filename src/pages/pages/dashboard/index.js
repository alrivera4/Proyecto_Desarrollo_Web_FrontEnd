// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardAppleWatch2 from 'src/views/cards/CardAppleWatch2'
import CardAppleWatch3 from 'src/views/cards/CardAppleWatch3'



const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={2} mt={20}>
        <Grid item xs={12} sm={4}>
          <CardAppleWatch />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardAppleWatch2 />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardAppleWatch3 />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
}


export default Dashboard
