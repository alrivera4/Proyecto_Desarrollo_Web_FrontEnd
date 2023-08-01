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
import FormInfo from 'src/views/form-layouts/FormInfo'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import 'react-datepicker/dist/react-datepicker.css'
import Grid from '@mui/material/Grid'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import TableDense from 'src/views/tables/TableDense'
import TableDense1 from '../tables/TableDense1'
import TableDense2 from '../tables/TableDense2'
import TableDense3 from '../tables/TableDense3'
import TableDense4 from '../tables/TableDense4'
import TableDense5 from '../tables/TableDense5'
import TableDense6 from '../tables/TableDense6'
import TableCollapsible from '../tables/TableCollapsible'
import TableCollapsible2 from '../tables/TableCollapsible2'
import TableCollapsible3 from '../tables/TableCollapsible3'
import TableCollapsible4 from '../tables/TableCollapsible4'
import TableCollapsible5 from '../tables/TableCollapsible5'

const CardNavigation = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid item xs={12} sm={12}>
      <Card>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='card navigation example'
            sx={{
              display: 'static',
              flexDirection: 'row-reverse',
              justifyContent: 'flex-end'
            }}
          >
            <Tab value='1' label='Personal' />
            <Tab value='2' label='Academia' />
            <Tab value='3' label='Trayectoria' />
            <Tab value='4' label='Capacitacion' />
            <Tab value='5' label='Publicaciones' />
            <Tab value='6' label='Acción Afirmativa' />
          </TabList>
          <CardContent>
            <TabPanel value='1' sx={{ p: 0 , width: '100%'}}>
              <Grid item xs={12} sm={12}>
                <FormInfo />
              </Grid>
            </TabPanel>
            <Grid>
              <TabPanel value='2' sx={{ p: 0 , width: '100%'}}>
                <Grid item xs={12} sm={12}>
                  <Card>
                    <TableDense1 />
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Card>
                    <TableDense />
                  </Card>
                </Grid>
                <br></br>
              </TabPanel>
            </Grid>
            <TabPanel value='3' sx={{ p: 0 , width: '100%'}}>
              <Grid item xs={12} sm={12}>
                <Card>
                  <TableDense2 />
                </Card>
              </Grid>
              <br></br>
            </TabPanel>
            <TabPanel value='4' sx={{ p: 0 , width: '100%'}}>
              <Grid item xs={12} sm={12}>
                <Card>
                  <TableDense3 />
                </Card>
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12}>
                <Card>
                  <TableDense4 />
                </Card>
              </Grid>
              <br></br>
            </TabPanel>
            <TabPanel value='5' sx={{ p: 0 , width: '100%'}}>
              <Grid xs={12} sm={12}>
                <Card>
                  <TableDense5 />
                </Card>
              </Grid>
              <br></br>
              <Grid xs={12} sm={12}>
                <Card>
                  <TableDense6 />
                </Card>
              </Grid>
              <br></br>
            </TabPanel>
            <TabPanel value='6' sx={{ p: 0, width: '100%' }}>
  <Typography variant='body2' sx={{ marginBottom: 6 }}>
    <TableCollapsible></TableCollapsible>
    <TableCollapsible2></TableCollapsible2>
    <TableCollapsible3></TableCollapsible3>
    <TableCollapsible4></TableCollapsible4>
    <TableCollapsible5></TableCollapsible5>
  </Typography>
</TabPanel>
          </CardContent>
        </TabContext>
      </Card>
    </Grid>
  )
}

export default CardNavigation
