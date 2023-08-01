// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardDirector = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://www.espe.edu.ec/wp-content/uploads/2021/10/crnl-villavicencio.jpg'
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Víctor Villavicencio Álvarez, Ph
        </Typography>
        <Typography variant='body2'>
          “Al asumir la rectoría pondré toda mi capacidad profesional, mi mayor esfuerzo, responsabilidad, lealtad y
          transparencia, pensando siempre en el desarrollo y crecimiento institucional, pero sobretodo, al servicio de
          la comunidad universitaria y de la sociedad a la que nos debemos”. Además, agradeció al mando militar por la
          designación y enfatizó que dará continuidad a los proyectos; y, pondrá en marcha el proceso de fortalecimiento
          institucional, tal es el caso. el clúster de innovación, entre otros. Finalmente, los señores rectores
          entrante y saliente suscribieron el Acta de entrega recepción del rectorado de la Universidad de las Fuerzas
          Armadas – ESPE.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardDirector
