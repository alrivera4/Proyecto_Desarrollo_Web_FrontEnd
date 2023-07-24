// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardNavigation = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card >
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Personal' />
          <Tab value='2' label='Academia' />
          <Tab value='3' label='Trayectoria' />
          <Tab value='4' label='Capacitacion' />
          <Tab value='5' label='Publicaciones' />
          <Tab value='6' label='Acción Positiva' />
        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header One
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Pudding tiramisu caramels. Gingerbread gummies danish chocolate bar toffee marzipan. Wafer wafer cake
              powder danish oat cake.
            </Typography>
            <Button variant='contained'>Button One</Button>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Two
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Dragée chupa chups soufflé cheesecake jelly tootsie roll cupcake marzipan. Carrot cake sweet roll gummi
              bears caramels jelly beans.
            </Typography>
            <Button variant='contained'>Button Two</Button>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate bar
              jujubes gummi bears lollipop.
            </Typography>
            <Button variant='contained'>Button Three</Button>
          </TabPanel>
          <TabPanel value='4' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate bar
              jujubes gummi bears lollipop.
            </Typography>
            <Button variant='contained'>Button Three</Button>
          </TabPanel>
          <TabPanel value='5' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate bar
              jujubes gummi bears lollipop.
            </Typography>
            <Button variant='contained'>Button Three</Button>
          </TabPanel>
          <TabPanel value='6' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate bar
              jujubes gummi bears lollipop.
            </Typography>
            <Button variant='contained'>Button Three</Button>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigation
