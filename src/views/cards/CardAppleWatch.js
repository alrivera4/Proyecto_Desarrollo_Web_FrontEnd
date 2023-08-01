// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='/images/img1.png' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Información
        </Typography>
        <Typography variant='body2'>
          Personal y Profesional
        </Typography>
      </CardContent>
      <Link passHref href='/pages/info'>
        <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            Actualizar
        </Button>
      </Link>

    </Card>
  )
}

export default CardAppleWatch
