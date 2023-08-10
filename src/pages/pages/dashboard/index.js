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

import axios from 'axios'

import React, { useEffect, useState } from 'react'
const getTokenFromStorage = () => {
  const token = localStorage.getItem('token'); // Cambiar 'token' por el nombre real de tu token en el almacenamiento local
  return token;
};

const Dashboard = () => {
  const [data, setData] = useState(null)
  
  const fetchData = async () => {
    try {
      // Obtener el token del almacenamiento local
      const token = getTokenFromStorage();
      console.log("client"+token);

      // Hacer una solicitud al servidor usando el token en el encabezado
      const response = await axios.get('http://10.240.2.252:4000/pages/dashboard', {
        headers: {
          'Authorization' : `Bearer ${token}`,
        },
      });
      console.log(response);

      // Actualizar el estado con los datos del usuario recibidos del servidor
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    }
  };

  // Obtener los datos del usuario al cargar el componente
  useEffect(() => {
    fetchData();
  }, []);

/*   if (!data) {
    return <p>Loading...</p>;
  } */

  return (
    <ApexChartWrapper>
      <Grid container spacing={2} mt={20}>
        <Grid item xs={12} sm={4}>
          {/* Usa dashboardData para pasar datos a los componentes */}
          <CardAppleWatch /* data={dashboardData.card1} */ />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardAppleWatch2 /* data={dashboardData.card2} */ />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardAppleWatch3 /* data={dashboardData.card3} */ />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
