// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardDirector = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='https://static.cegos.es/content/uploads/2023/03/06121117/GettyImages-1313239835.jpg' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Dr. Jaime Nuviola
        </Typography>
        <Typography variant='body2'>
          Estar en movimiento es entender que es una decisión, la cual exige la capacidad de romper lo establecido y
          generar acciones que propicien grandes cambios. Es entender que lo que hacemos o expresamos tiene un impacto
          directo en las personas y en la sociedad. Es entender que una pequeña alteración inicial, mediante un proceso
          de amplificación, puede generar un efecto considerablemente grande, a corto o mediano plazo.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardDirector
