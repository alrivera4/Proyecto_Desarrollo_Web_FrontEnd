// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'



const CardAppleWatch3 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.jpg' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Mi Postulación
        </Typography>
        <Typography variant='body2'>
          Postulación Registrada
        </Typography>
      </CardContent>
      <Link passHref href='/pages/postulacion'>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Ver mi Postulacion 
      </Button>
      </Link>
    </Card>
  )
}

export default CardAppleWatch3
