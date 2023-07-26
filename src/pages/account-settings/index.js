// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Button, Card, CardContent, CardHeader, Container, Divider, Grid, Link, TextField } from '@mui/material'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'
import LoginPage from 'src/pages/pages/login/login'
import RegisterCard from 'src/views/cards/CardRegister'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState(true)

  const handleChangeLogin = () => {
    setValue(true)
  }

  const handleChangeRegister = () => {
    setValue(false)
  }

  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Link>
                <Button onClick={handleChangeLogin}>Iniciar Sesión</Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link>
                <Button onClick={handleChangeRegister}>Registrar</Button>
              </Link>
            </Grid>
          </Grid>
          <Divider></Divider>
          {value ? <LoginPage /> : <RegisterCard />}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default AccountSettings
