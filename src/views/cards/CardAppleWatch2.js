// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardAppleWatch2 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='/images/img2.png' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Oferta
        </Typography>
        <Typography variant='body2'>
          Ofertas Registradas
        </Typography>
      </CardContent>
      <Link passHref href='/pages/oferta'>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Ver Oferta
      </Button>
      </Link>
    </Card>
  )
}

export default CardAppleWatch2
