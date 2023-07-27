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
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import 'react-datepicker/dist/react-datepicker.css'
import Grid from '@mui/material/Grid'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import TableDense from 'src/views/tables/TableDense'
import TableDense2 from '../tables/TableDense2'
import TableDense3 from '../tables/TableDense3'
import TableDense4 from '../tables/TableDense4'
import TableDense5 from '../tables/TableDense5'
import TableDense6 from '../tables/TableDense6'
import TableCollapsible from '../tables/TableCollapsible'



const CardNavigation = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card >
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse', 
          justifyContent: 'flex-end', 
        }}>
          <Tab value='1' label='Personal' />
          <Tab value='2' label='Academia' />
          <Tab value='3' label='Trayectoria' />
          <Tab value='4' label='Capacitacion' />
          <Tab value='5' label='Publicaciones' />
          <Tab value='6' label='Acción Positiva' />
        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
          <DatePickerWrapper>
            <Grid item xs={10}>
              <FormLayoutsSeparator />
            </Grid>
          </DatePickerWrapper>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}></div>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
          <Grid item xs={12}>
            <Card>
              <TableDense />
            </Card>
          </Grid>
          <br></br>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
          <Grid item xs={12}>
            <Card>
              <TableDense2 />
            </Card>
          </Grid>
          <br></br>
          </TabPanel>
          <TabPanel value='4' sx={{ p: 0 }}>
          <Grid item xs={12}>
            <Card>
              <TableDense3 />
            </Card>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Card>
              <TableDense4 />
            </Card>
          </Grid>
          <br></br>
          </TabPanel>
          <TabPanel value='5' sx={{ p: 0 }}>
          <Grid item xs={12}>
            <Card>
              <TableDense5 />
            </Card>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Card>
              <TableDense6/>
            </Card>
          </Grid>
          <br></br>
          </TabPanel>
          <TabPanel value='6' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
            <TableCollapsible></TableCollapsible>
            </Typography>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigation

