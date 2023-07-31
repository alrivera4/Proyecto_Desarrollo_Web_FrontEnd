import { Card, CardContent, Container, Grid, TextField } from '@mui/material'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import CardDirector from 'src/views/cards/CardDirector'
import LoginPage from 'src/pages/pages/login/index'
import Account from 'src/pages/account-settings/index1'

const styles = {
  heroContainer: {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '450px',
    position: 'relative' // Added this position to the heroContainer
  },
  header: {
    position: 'fixed',
    width: '100%',
    height: '60px', // Adjust the height of the header as per your requirement
    backgroundColor: '#ffffff',
    zIndex: 1,
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)'
  },
  whiteText: {
    color: 'white'
  },
  logoImage: {
    width: '170px', // Adjust the width of the image as per your requirement
    height: 'auto' // This will maintain the aspect ratio of the image
  }
}

const LandingPage = () => {
  return (
    <>
      {/* Encabezado */}
      <Grid container style={styles.header}>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center', marginTop: '1px' }}>
          <img src='https://www.espe.edu.ec/wp-content/uploads/2022/01/ESPEtransparente.png' alt='Logo' style={{ width: '200px', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: '5px' }}></Grid>
      </Grid>

      <Grid container style={styles.heroContainer}>
        <Grid item xs={12} sm={4} mt={15} ml={10} style={styles.whiteText}>
          <h2>Talento Humano</h2>
          <h3>
            Sistema de gestión de la Información de los Procesos del departamento de Adminitración de Talento Humano
          </h3>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4} style={styles.whiteText} mt={25} ml={290}>
          <img
            src='https://moodleltga.espe.edu.ec/moodle/pluginfile.php/1/theme_eguru/logo/1689336800/logo%20espe%20100%20an%CC%83os%20variaciones-06%20%281%29.png'
            alt='UNACH Logo'
            style={styles.logoImage}
          />
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={5} mt={2}>
          <Account/>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={4} md={4}>
            <CardDirector />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
LandingPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LandingPage
